
// Action constants.
export const TRANSACTION_ADD = 'TRANSACTION_ADD';



// Action creators.

/**
 * Add transaction in store. 
 * 
 * @param {Object} transaction - Transaction data.
 * @return {Object} action 
 */
export function transactionAdd(transaction) {
	return {
		type: TRANSACTION_ADD,
		transaction
	}
}

