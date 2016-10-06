import React from 'react';


const TextareaField = ({ input, autoComplete, className, label, type, meta: { touched, error }}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input}  className={className} type={type} >
        </textarea>
        <div className="label label-danger">
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    </div>
  );
}
export default TextareaField;