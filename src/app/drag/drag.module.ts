import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula'
// import { SharedModule } from '../shared/shared.module'


import { DragComponent } from './drag.component'


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DragulaModule
 
    ],
    declarations: [ DragComponent ],
    providers: [ DragulaService ],
    exports: [ DragComponent ]
})

export class DragModule { }
