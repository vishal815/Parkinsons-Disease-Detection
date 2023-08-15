import React, { useState } from 'react';
import Step from './Step';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import '../../Styles/layout.css';

const steps = [
  // Define your steps here
  { title: 'Step 1', fields: ['username','mdvpFo', 'mdvpFhi', 'mdvpFlo', 'mdvpJitterPercent' ] },
  { title: 'Step 2', fields: ['mdvpJitterAbsolute','mdvpRap', 'mdvpPPQ', 'jitterDDP', 'mdvpJimmer',] },
  { title: 'Step 3', fields: [ 'mdvpJimmerDB','shimmerAPQ3', 'shimmerAPQ5', 'mdvpAPQ', 'shimmerDDA'] },
  { title: 'Step 4', fields: [ 'NHR','HNR', 'RPDE', 'DFA', 'spread1'] },
  { title: 'Step 5', fields: ['spread2','d2', 'PPE'] },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const isAnyFieldEmpty = () => {
    const currentStepFields = steps[step].fields;
    return currentStepFields.some((field) => !formData[field]);
  };

  const isAllFieldsEmpty = () => {
    return steps.some((step) => step.fields.some((field) => !formData[field]));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Step
        title={steps[step].title}
        fields={steps[step].fields}
        formData={formData}
        onInputChange={handleInputChange}
      />
      <div className="arrow-container">
        <button onClick={prevStep} disabled={step === 0} className={step === 0 ? 'disabled-button' : ''}>
          <BsFillArrowLeftCircleFill className="arrow" />
        </button>
        {step === steps.length - 1 ? (
          <Link to={{ pathname: '/result', state: { formData } }}>
          <button className={isAllFieldsEmpty() ? 'disabled-button' : 'btn'} disabled={isAllFieldsEmpty()}>
            Predict
          </button>
          </Link>
        ) : (
          <button
            className={isAnyFieldEmpty() ? 'disabled-button' : ''}
            onClick={nextStep}
            disabled={isAnyFieldEmpty()}
          >
            <BsFillArrowRightCircleFill className="arrow" />
          </button>
        )}
      </div>
    </div>
  );
        }

export default MultiStepForm;
