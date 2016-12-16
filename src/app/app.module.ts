import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { routes } from './app.routes'
import { BoxofficeModule } from './boxoffice/boxoffice.module'
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
