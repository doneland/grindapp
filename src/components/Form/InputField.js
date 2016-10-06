import React from 'react'; 


const InputField = ({ input, className, autoComplete, label, type, meta: { touched, error }}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input}  autoComplete={autoComplete} className={className} type={type} />
        <div className="label label-danger">
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    </div>
  );
}
export default InputField;