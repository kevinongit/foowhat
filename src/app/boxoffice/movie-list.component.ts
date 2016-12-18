import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
	@Input() movies: any[];
	@Output() selectMovie = new EventEmitter<any>();

}