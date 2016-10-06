import React from 'react';
import { reduxForm, Field } from 'redux-form';
import classNames from 'classnames';

import validateTransaction from './validateTransaction';
import InputField from '../Form/InputField';
import TextareaField from '../Form/TextareaField';
import TransactionTypeField from './form/TransactionTypeField.jsx';



class TransactionForm extends React.Component {
  render() {
    const {
      handleSubmit, 
      pristine, 
      reset, 
      submitting,
      valid
    } = this.props;


    return (
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <Field  
            label="Transaction date"
            className="form-control"
            name="transaction_date"
            autoComplete="off"
            component={InputField}
            type="date" />
        </div>

        <div className="form-group">
          <Field  
            label="Type"
            className="form-control"
            name="transaction_type"
            autoComplete="off"
            defaultValue="outflow"
            component={TransactionTypeField}
            parse={(value) => value.toLowerCase()}
            type="text" />
        </div>

        <div htmlFor="amount" className="form-group">
          <Field 
            className="form-control"
            name="amount" 
            component={InputField} 
            type="number"
            autoComplete="off"
            label="Amount" /> 
        </div>

        <div className="form-group">
          <Field 
            label="Category"
            className="form-control"
            name="category" 
            component={InputField}
            autoComplete="off" 
            type="text" />
        </div>

        <div className="form-group">
          <Field
            label="Comment"
            className="form-control" 
            name="comment"
            type="textarea"
            autoComplete="off"
            component={TextareaField} />
        </div>

        <div className="form-group">
          <button 
            className="btn btn-primary"
            type="submit" 
            disabled={submitting}>
            Add TransactionForm
          </button>
        </div>

        <div className="form-group">
          <pre>Valid: {JSON.stringify(valid)}</pre>
        </div>
      </form>
    );
  }
}


TransactionForm = reduxForm({
  form: 'transactionForm',
  validate: validateTransaction
})(TransactionForm);

export default TransactionForm;
