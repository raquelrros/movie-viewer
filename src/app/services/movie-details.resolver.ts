import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MovieDetails } from '../interfaces/movie-details';
import { MovieService } from './movie.service';

export const movieDetailsResolver: ResolveFn<MovieDetails> = (route, state) => {
  return inject(MovieService).getMovieDetails(
    parseInt(route.paramMap.get('id')!)
  );
};
