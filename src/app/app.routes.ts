import { Routes } from '@angular/router'

import { BoxofficeRoutes } from './boxoffice/index'
import { BoxofficeComponent } from './boxoffice/boxoffice.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'

export const routes: Routes = [
    ...BoxofficeRoutes,
    { path: 'home',      component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: BoxofficeComponent }
];