import React from 'react';
import classNames from 'classnames';


class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className={}>
          <input className="form-control" />
        </div>

        <div className="form-group">
          <button
            className="btn btn-success" >
            Add Transaction
          </button>
        </div>
      </form>
    );
  }
}


export default TransactionForm;
