import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CalendarModule } from 'primeng/primeng'

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

    ngOnInit() {
        let today:Date = new Date();
        let yesterday: Date = new Date();
    
        yesterday.setDate(today.getDate() - 1);
        this.searchForm = this.formBuilder.group({
            msisdn: '',
            target: '',
            tid: '',
            state: yesterday,
            dp: today,
            endDate: today
        });
    }

    onSearch() {
        
        if ( !this.searchForm ) return;
        console.log("onSearch()");
        console.log(this.searchForm.value);
        this.doSearch.emit({
            'values': this.searchForm.value
        });
        // this.searchForm.reset();
    }
}