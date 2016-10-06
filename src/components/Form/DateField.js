import React from 'react';



const DateField = (props) => {
	const { 
		input, 
		className, 
		autoComplete, 
		label, 
		type, 
		meta: { 
			touched, error }} = props;

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


export default DateField;