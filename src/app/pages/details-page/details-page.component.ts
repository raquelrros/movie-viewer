import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  movieDetails$!: Observable<MovieDetails>;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieDetails$ = this.route.params.pipe(
      switchMap((params) => this.movieService.getMovieDetails(params['id']))
    );
  }
}
