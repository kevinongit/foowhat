import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'transaction-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './transaction-search.component.html'
})
export class TransactionSearchComponent {
    searchForm: FormGroup;
	// @Input() data: any;
	@Output() doSearch = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            msisdn: '',
            tid: '',
            state: ''
        });
    }

    onSearch() {
        if ( !this.searchForm ) return;
        this.doSearch.emit({
            'msisdn': this.searchForm.value.msisdn,
            'tid': this.searchForm.value.tid,
            'state': this.searchForm.value.state
        });
        this.searchForm.reset();
    }
}