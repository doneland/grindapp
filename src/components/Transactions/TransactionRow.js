import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames'; 

import styles from './TransactionRow.css';


const TransactionRow = ({transaction}) => {
  return (
    <div>
      {transaction.category} => {transaction.value}
    </div>
  );
}


TransactionRow.propTypes = {
  transaction: PropTypes.object.isRequired
}


export default TransactionRow; 
