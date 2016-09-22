import _ from 'lodash';

import {
	TRANSACTION_ADD
} from './transactionActions';


let initialState = [
	{_id: '24234NJJ324JN', category: 'FOOD', value: 12.5},
	{_id: 'ASLDLASD21323', category: 'FOOD', value: 8.5},
	{_id: '24234NJJ324JN', category: 'LEISURE', value: 9.2}
];


export default function transactionReducer(state=initialState, action) {
	switch(action.type) {
	case TRANSACTION_ADD:
		return _.concat(state, action.transaction);
		break;
	default:
		return state;
	}
	return state;
}