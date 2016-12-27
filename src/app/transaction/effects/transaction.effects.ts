import { Injectable } from '@angular/core'
import { Effect, Actions, toPayload } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { TransactionActions } from '../actions/transaction.actions'
import { TransactionService } from '../services/transaction.service'

@Injectable()
export class TransactionEffects {
    constructor(
        private actions$: Actions,
        private transactionService: TransactionService
    ) {}

    @Effect() updateTransaction$ = this.actions$
        .ofType(TransactionActions.TRANSACTION_UPDATE_TRANSACTION)
        .switchMap(action => this.transactionService.getTransactions(action.payload)
            .map(transactions => ({type: TransactionActions.TRANSACTION_UPDATE_TRANSACTION_SUCCESS, payload: transactions}))
            .catch(error => Observable.of({type: TransactionActions.TRANSACTION_UPDATE_TRANSACTION_FAIL, payload: error }))
        );

    @Effect() selectTransaction$ = this.actions$
        .ofType(TransactionActions.TRANSACTION_SELECT_TRANSACTION)
        .switchMap(action => this.transactionService.getOneTransaction(action.payload.rank)
            .map(transaction => ({type: TransactionActions.TRANSACTION_SELECT_TRANSACTION_SUCCESS, payload: transaction}))
            .catch(error => Observable.of({type: TransactionActions.TRANSACTION_SELECT_TRANSACTION_FAIL, payload: error }))
        );
}
