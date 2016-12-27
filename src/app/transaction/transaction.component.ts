import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { State } from '../shared/models/state.model'
import { TransactionService } from './services/transaction.service'
import { TransactionState } from './reducers/transaction.reducer'
import { TransactionActions } from './actions/transaction.actions'


@Component({
	selector: 'transaction-cmp',
	templateUrl: './transaction.component.html'
})
export class TransactionComponent implements OnInit {
	transactionModel$: Observable<TransactionState>;

	constructor(
		private transactionService : TransactionService,
		private store: Store<State>
		) {
			console.log('TransactionComponent');
	}

	ngOnInit(): void {
		this.transactionModel$ = this.store.select<TransactionState>('transaction');
		this.store.dispatch({ type: TransactionActions.TRANSACTION_UPDATE_TRANSACTION, payload: null});
		console.log('in ngOnInit()');
	}

	onSearch(searchData) {
		console.log('searchData : ' + JSON.stringify(searchData.values));
	}

    onSelectTransaction(tid: string) {
		this.store.dispatch({type: TransactionActions.TRANSACTION_SELECT_TRANSACTION, payload: tid });
    }
 }