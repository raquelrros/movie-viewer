import { Injectable } from '@angular/core';

import { Movie } from '../interfaces/movie';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Movie[] {
    return [
      {
        title: 'Ant-Man and the Wasp: Quantumania',
        release_date: '2023-02-15',
        poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
      },
      {
        title: 'Ant',
        release_date: '2002-05-01',
        poster_path: null,
      },
      {
        title: 'Ant-Man',
        release_date: '2015-07-14',
        poster_path: '/iYdgEUE2W2aJkgqfSjf1x3gFfuV.jpg',
      },
    ];
  }
}
