import { Injectable } from '@angular/core';

import { Movie } from '../interfaces/movie';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';

const API_KEY = '1a1c7cf830890ed6bffa901d867a3b37';
const BASE_URL = 'https://api.themoviedb.org/3';

interface SearchAPIResponse {
  page: number;
  results: Movie[];
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(term: string): Observable<Movie[]> {
    return this.http
      .get<SearchAPIResponse>(BASE_URL + '/search/movie', {
        params: {
          api_key: API_KEY,
          query: term,
        },
      })
      .pipe(map((res) => res.results));
  }

  getMovieDetails(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(BASE_URL + `/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
  }
}
