import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { boxofficeReducer } from './boxoffice/reducers/boxoffice.reducer'
import { BoxofficeEffects } from './boxoffice/effects/boxoffice.effects'
import { transactionReducer } from './transaction/reducers/transaction.reducer'
import { TransactionEffects } from './transaction/effects/transaction.effects'

import { routes } from './app.routes'
import { BoxofficeModule } from './boxoffice/boxoffice.module'
import { TransactionModule } from './transaction/transaction.module'
import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ToastComponent } from './shared/toast/toast.component'
import { DataService } from './services/data.service';


// const routing = RouterModule.forRoot([
//     { path: '',      component: HomeComponent },
//     { path: 'about', component: AboutComponent }
// ]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BoxofficeModule,
    TransactionModule,

    NgbModule.forRoot(),
    StoreModule.provideStore({
        boxoffice: boxofficeReducer,
        transaction: transactionReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BoxofficeEffects),
    EffectsModule.run(TransactionEffects),

    SharedModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
