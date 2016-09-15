import React from 'react';
import classNames from 'classnames';

//import ar from '../App/AppRoot.css';


class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div>
          <input className="form-control" />
        </div>

        <div className="form-group">
          <button>
            Add Transaction
          </button>
        </div>
      </form>
    );
  }
}


export default TransactionForm;
