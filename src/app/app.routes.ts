import { Routes } from '@angular/router'

import { BoxofficeRoutes } from './boxoffice/boxoffice.routes'
import { TransactionRoutes } from './transaction/transaction.routes'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'

import { BoxofficeComponent } from './boxoffice/boxoffice.component'
// import { MovieListComponent } from './boxoffice/home/movie-list.component'

export const routes: Routes = [
    ...BoxofficeRoutes,
    ...TransactionRoutes,
    { path: 'home',      component: HomeComponent },
    { path: 'about', component: AboutComponent },

    { path: 'test', component: BoxofficeComponent },
    // { path: 'list', component: MovieListComponent },
    { path: '', component: HomeComponent }
];