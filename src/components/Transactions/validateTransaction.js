import validate from 'validate.js';
import moment from 'moment';

const constrain = {
  amount: {
    presence: true,
    numericality: {
      greaterThan: 0
    }
  },
  transaction_date: {
    presence: true,
    date: {
      dateOnly: true,
      latest: moment.utc()
    }
  },
  transaction_type: {
    presence: true,
    inclusion: {
      within: ["outflow", "inflow", "OUTFLOW", "INFLOW"],
      message: 'should be "outflow" or "inflow"'
    }
  },
  category: {
    presence: true
  }
};

export default function validateTransaction(data) {

  validate.extend(validate.validators.datetime, {
    // The value is guaranteed not to be null or undefined but otherwise it
    // could be anything.
    parse: function (value, options) {
      let parsedValue = +moment.utc(value);
      return parsedValue;
    },

    // Input is a unix timestamp.
    format: function (value, options) {
      let formatedValue = moment.utc(value).format();
      return formatedValue;
    }
  });

  const result = validate(data, constrain);
  return result;
}