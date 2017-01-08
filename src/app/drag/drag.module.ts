import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { DndModule } from 'ng2-dnd'


import { DragComponent } from './drag.component'


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DndModule.forRoot()
 
    ],
    declarations: [ DragComponent ],
    providers: [  ],
    exports: [ DragComponent ]
})

export class DragModule { }
