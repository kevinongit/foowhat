import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'



@Component({
	selector: 'drag-cmp',
	templateUrl: './drag.component.html'
})
export class DragComponent implements OnInit {

	constructor(

		) {
			console.log('DragComponent');
	}

	ngOnInit(): void {
		
	}


 }