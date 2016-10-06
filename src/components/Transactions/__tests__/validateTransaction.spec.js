import { expect } from 'chai';
import moment from 'moment';

import validateTransaction from '../validateTransaction';

describe('validateTransaction', function () {

  it('validate form data', function () {
    const formData = {
      amount: 10,
      transaction_date: '2016-09-23',
      transaction_type: 'outflow',
      category: 'FOOD',
      comment: 'Daily spending.'
    };

    let result = validateTransaction(formData);
    expect(!result).to.be.true;

    // Make amount field invalid.
    formData["amount"] = -1;
    result = validateTransaction(formData);
    let countFieldsWithErrors = Object.keys(result).length;
    expect(!result).to.be.false;
    expect(!result.amount).to.be.false;
    expect(countFieldsWithErrors).to.equal(1);

    // Zero is not allowed in amount field.
    formData["amount"] = 0;
    result = validateTransaction(formData);
    countFieldsWithErrors = Object.keys(result).length;
    expect(!result).to.be.false;
    expect(!result.amount).to.be.false;
    expect(countFieldsWithErrors).to.equal(1);

    // Transaction type should be provided.
    formData["amount"] = 1;
    formData["transaction_type"] = null;
    result = validateTransaction(formData);
    countFieldsWithErrors = Object.keys(result).length;
    expect(!result).to.be.false;
    expect(!result["transaction_type"]).to.be.false;
    expect(countFieldsWithErrors).to.equal(1);

    // Transaction type could be "outflow" or "inflow".
    formData["transaction_type"] = "sometype";
    result = validateTransaction(formData);
    countFieldsWithErrors = Object.keys(result || {}).length;
    expect(!result).to.be.false;
    expect(!result["transaction_type"]).to.be.false;
    expect(countFieldsWithErrors).to.equal(1);

    // Restore trasaction_type to valid data. 
    formData["transaction_type"] = "outflow";
    result = validateTransaction(formData);
    expect(!result).to.be.true;

    // Date should be provided in transaction_date field.
    formData["transaction_date"] = null;
    result = validateTransaction(formData);
    countFieldsWithErrors = Object.keys(result || {}).length;
    expect(!result).to.be.false;
    expect(!result["transaction_date"]).to.be.false;
    expect(countFieldsWithErrors).to.equal(1);

    // User cannot provide future date.
    const today = new Date();
    const plusTenDays= moment(today).add(10, 'days').format('YYYY-MM-DD');
    formData["transaction_date"] = plusTenDays;
    result = validateTransaction(formData);
    countFieldsWithErrors = Object.keys(result || {}).length;
    expect(!result).to.be.false;
    expect(!result["transaction_date"]).to.be.false;
  }); 

  it('date manipulations', function () {
    const today = new Date(2016, 8, 28);
    const todayBackDay = new Date(2016, 8, 27);
    const diff = today - todayBackDay;

    const diffMoment = moment(diff);

    const todayM = moment(today);
    const todayBackDayM = moment(todayBackDay);
    const diffM = todayM.diff(todayBackDay, 'hours');
  });
});