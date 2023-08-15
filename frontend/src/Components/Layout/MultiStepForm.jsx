import React, { useState } from 'react';
import Step from './Step';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setResult } from './../../redux/resultSlice';


import '../../Styles/layout.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const steps = [
  // Define your steps here
  { title: 'Step 1', fields: ['username', 'mdvpFo', 'mdvpFhi', 'mdvpFlo', 'mdvpJitterPercent'] },
  { title: 'Step 2', fields: ['mdvpJitterAbsolute', 'mdvpRap', 'mdvpPPQ', 'jitterDDP', 'mdvpJimmer',] },
  { title: 'Step 3', fields: ['mdvpJimmerDB', 'shimmerAPQ3', 'shimmerAPQ5', 'mdvpAPQ', 'shimmerDDA'] },
  { title: 'Step 4', fields: ['NHR', 'HNR', 'RPDE', 'DFA', 'spread1'] },
  { title: 'Step 5', fields: ['spread2', 'd2', 'PPE'] },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState();

  const dispatch = useDispatch();

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

  const onSubmitForm = async () => {

    try {

      setLoading(true);

      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_FASTAPI_URL}`, {
        "mdvpFo": Number(formData.mdvpFo),
        "mdvpFhi": Number(formData.mdvpFhi),
        "mdvpFlo": Number(formData.mdvpFlo),
        "mdvpJitterPercent": Number(formData.mdvpJitterPercent),
        "mdvpJitterAbsolute": Number(formData.mdvpJitterAbsolute),
        "mdvpRap": Number(formData.mdvpRap),
        "mdvpPPQ": Number(formData.mdvpPPQ),
        "jitterDDP": Number(formData.jitterDDP),
        "mdvpJimmer": Number(formData.mdvpJimmer),
        "mdvpJimmerDB": Number(formData.mdvpJimmerDB),
        "shimmerAPQ3": Number(formData.shimmerAPQ3),
        "shimmerAPQ5": Number(formData.shimmerAPQ5),
        "mdvpAPQ": Number(formData.mdvpAPQ),
        "shimmerDDA": Number(formData.shimmerDDA),
        "NHR": Number(formData.NHR),
        "HNR": Number(formData.HNR),
        "RPDE": Number(formData.RPDE),
        "DFA": Number(formData.DFA),
        "spread1": Number(formData.spread1),
        "spread2": Number(formData.spread2),
        "d2": Number(formData.d2),
        "PPE": Number(formData.PPE)
      });

      setLoading(false);

      if (data.pred_value === 0) {

        toast.success('Prediction done successfully', {
          position: 'bottom-center',
          duration: 3500
        });

        dispatch(setResult(`Dear ${formData.username}, you don't have Parkinson Disease.`));

      } else {

        toast.success('Prediction done successfully', {
          position: 'bottom-center',
          duration: 3500
        });

        dispatch(setResult(`Dear ${formData.username}, you have Parkinson Disease.`));


      }

    } catch (error) {

      setLoading(false);

      toast.error('Something went wrong!! Please try again', {
        position: 'bottom-center',
        duration: 3500
      });

      console.log(error);

    }
  }

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
            <button className={isAllFieldsEmpty() ? 'disabled-button' : 'btn'} disabled={isAllFieldsEmpty()} onClick={onSubmitForm}>
              {loading ? 'Predicting' : 'Predict'}
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
