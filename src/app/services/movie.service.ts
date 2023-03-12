import { Injectable } from '@angular/core';

import { Movie } from '../interfaces/movie';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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
    // return [
    //   {
    //     title: 'Ant-Man and the Wasp: Quantumania',
    //     release_date: '2023-02-15',
    //     poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
    //   },
    //   {
    //     title: 'Ant',
    //     release_date: '2002-05-01',
    //     poster_path: null,
    //   },
    //   {
    //     title: 'Ant-Man',
    //     release_date: '2015-07-14',
    //     poster_path: '/iYdgEUE2W2aJkgqfSjf1x3gFfuV.jpg',
    //   },
    // ];
    return this.http
      .get<SearchAPIResponse>(BASE_URL + '/search/movie', {
        params: {
          api_key: API_KEY,
          query: term,
        },
      })
      .pipe(map((res) => res.results));
  }
}
