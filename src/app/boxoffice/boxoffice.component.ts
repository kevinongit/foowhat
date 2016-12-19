import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { State } from '../shared/models/state.model'
import { MovieService } from './services/movie.service'
import { BoxofficeState } from './reducers/boxoffice.reducer'
import { BoxofficeActions } from './actions/boxoffice.actions'


@Component({
	selector: 'boxoffice-cmp',
	templateUrl: './boxoffice.component.html'
})
export class BoxofficeComponent implements OnInit {
	boxofficeModel$: Observable<BoxofficeState>;

	constructor(
		private movieService : MovieService,
		private store: Store<State>
		) {
			console.log('MovieListcomponent');
	}

	ngOnInit(): void {
		this.boxofficeModel$ = this.store.select<BoxofficeState>('boxoffice');
		this.getMovies();
	}

	getMovies(): void {
		this.movieService.getMovies().subscribe(boxInfo => {
			console.log('in subscribe');
			this.store.dispatch({ type: BoxofficeActions.BOXOFFICE_UPDATE_MOVIE_LIST, payload: boxInfo.movies});
		});
		console.log('in getMovies()');
	}

    onSelectMovie(movie: any) {
		this.store.dispatch({type: BoxofficeActions.BOXOFFICE_SELECT_MOVIE, payload: this.movieService.getOneMovie(movie.rank) });
    }
 }
