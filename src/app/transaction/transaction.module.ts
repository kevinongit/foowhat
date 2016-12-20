import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { transactionReducer } from './reducers/transaction.reducer'
import { TransactionEffects } from './effects/transaction.effects'
import { TransactionComponent } from './transaction.component'
import { TransactionService } from './services/transaction.service'
import { TransactionListComponent } from './transaction-list.component'

import {TopNavComponent, SidebarComponent } from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
        SharedModule,
        // StoreModule.provideStore({
        //     transaction: transactionReducer
        // }),
        // StoreDevtoolsModule.instrumentOnlyWithExtension(),
        // EffectsModule.run(TransactionEffects)
    ],
    declarations: [ TransactionComponent, TransactionListComponent ],
    providers: [ TransactionService ],
    exports: [ TransactionComponent, TransactionListComponent ]
})

export class TransactionModule { }
