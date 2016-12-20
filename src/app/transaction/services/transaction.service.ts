import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import { TRANSACTION_LIST } from './mock-transaction'


@Injectable()
export class TransactionService {
	private transactionUrl = 'api/transactions';
	private headers = new Headers({'Content-Type' : 'application/json'});

	constructor(private http: Http) {
	}

	getTransactions() : Observable<any> {
		console.log('getTransactions()');
		return Observable.of(TRANSACTION_LIST);
	}

	getOneTransaction(rank:string) : any {
		let transaction = TRANSACTION_LIST.rows[0];
		
		return Observable.of(transaction);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
