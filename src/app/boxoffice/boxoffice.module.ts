import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { BoxofficeComponent } from './boxoffice.component'
import { MovieListComponent } from './movie-list.component'
import { MovieDetailComponent } from './movie-detail.component'
import { MovieService } from './services/movie.service'

import {TopNavComponent, SidebarComponent } from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
        SharedModule,
    ],
    declarations: [ BoxofficeComponent, MovieListComponent, MovieDetailComponent ],
    providers: [ MovieService ],
    exports: [ BoxofficeComponent, MovieListComponent, MovieDetailComponent ]
})

export class BoxofficeModule { }
