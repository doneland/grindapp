import React from 'react';


const TransactionType = (props) => {
	const {input: {value, onChange}, defaultValue, parse} = props;

	if (!value) {
		onChange(defaultValue.toLowerCase());
	}

	let btnDefault = "btn btn-default";
	let btnActive = "btn btn-success"
	let classNames = {
		outflow: value === "outflow" ? btnActive: btnDefault,
		inflow: value === "inflow" ? btnActive: btnDefault
	};

	return (
		<div className="btn-group" role="group">			
			<button 
				className={classNames["outflow"]}
				type="button"
				onClick={() => onChange("outflow")}>
				Outflow
			</button>
			
			<button 
				className={classNames["inflow"]}
				type="button"
				onClick={() => onChange("inflow")}>
				Inflow
			</button>
		</div>
	);
}


export default TransactionType;