import { ActionReducer, Action } from '@ngrx/store'

import { TransactionActions } from '../actions/transaction.actions'

export interface TransactionState {
    transaction : any,
    selectedTransaction : any;
};

const initialState: TransactionState = {
    transaction: null,
    selectedTransaction: null
};

// fix: https://github.com/ngrx/store/issues/190
// from : export const boxofficeReducer: ActionReducer<BoxofficeState> = (state = initialState, action: Action) => {
// to : below
export function transactionReducer (state = initialState, action: Action) {
    switch (action.type) {
        case TransactionActions.TRANSACTION_UPDATE_TRANSACTION_SUCCESS: {
            console.log('in reducer success');
            return Object.assign({}, state, { transaction: action.payload });
        }
        case TransactionActions.TRANSACTION_SELECT_TRANSACTION_SUCCESS: {
            return Object.assign({}, state, { selectedTransaction: action.payload });
        }
        default : {
            return state;
        }
    }
};
