import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'




@Component({
	selector: 'drag-cmp',
	templateUrl: './drag.component.html',
	styleUrls: [ './drag.component.css' ]
})
export class DragComponent {
	transferData:Object = {id:1, msg:'Hello World!'};
	transferData2:Object = { id:2, msg:'Hi There' };
	receivedData:Array<any> = [];

	constructor() { }

	transferDataSuccess($event) {
		this.receivedData.push($event.dragData);
	}


 }