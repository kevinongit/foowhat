import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'transaction-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './transaction-list.component.html'
})
export class TransactionListComponent {
	@Input() data: any;
	// @Output() selectMovie = new EventEmitter<any>();

}