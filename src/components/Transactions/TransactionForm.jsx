import React from 'react';
import classNames from 'classnames';


class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { createTransaction } = this.props;

    return (
      <form onSubmit={createTransaction}>
        <div className="form-group">
          <input className="form-control" />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">
            Add TransactionForm
          </button>
        </div>
      </form>
    );
  }
}


export default TransactionForm;
