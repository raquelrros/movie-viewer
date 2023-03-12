import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnChanges {
  movies$: Observable<Movie[]> | null = null;
  @Input() userInput: string = '';

  constructor(private movieService: MovieService) {}

  ngOnChanges(): void {
    this.getMovies(this.userInput);
  }

  getMovies(term: string): void {
    this.movies$ = term === "" ? null : this.movieService.getMovies(term);
  }
}
