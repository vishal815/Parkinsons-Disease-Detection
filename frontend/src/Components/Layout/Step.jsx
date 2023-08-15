import React from 'react';
import '../../Styles/layout.css'
const Step = ({ fields, formData, onInputChange }) => {
  return (
    <div className='main-form-stps'>
      
      {fields.map((field) => (
        <div key={field} className='multi-step-contaoner'>
          <label htmlFor={field}>{field}:</label>

          <input
            type={field === 'username' ? 'text' : 'number'}
            value={formData[field] || ''}
            onChange={(e) => onInputChange(field, e.target.value)}
            min={field === 'username' ? null : 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Step;
