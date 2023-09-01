import React from 'react';

import "./InputField.css";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type, placeholder}) => {
    return (
      <div className="input__container">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} required placeholder={placeholder}/>   
      </div> 
    );
}

export default InputField;