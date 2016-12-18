import { Component } from '@angular/core'
import { OnInit } from '@angular/core'

import { MovieService } from './services/movie.service'

@Component({
	selector: 'boxoffice-cmp',
	templateUrl: './boxoffice.component.html'
})
export class BoxofficeComponent implements OnInit {
	movies : any[];
    movieDetail: any = null;

	constructor(
		private movieService : MovieService) {
			console.log('MovieListcomponent');
	}

	ngOnInit(): void {
		this.getMovies();
	}

	getMovies(): void {
		this.movieService.getMovies().subscribe(boxInfo => {
				 	console.log('in subscribe');
				 	this.movies = boxInfo.movies;
				 	console.log('movies.length = ' + this.movies.length);
				 });
		console.log('in getMovies()');
	}

    onSelectMovie(movie: any) {
        this.movieDetail = this.movieService.getOneMovie(movie.rank);
		console.log('Movie Detail : ' + JSON.stringify(this.movieDetail));
    }
 }
