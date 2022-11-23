import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    let movies: Movie[] = [];

    let movie1: Movie = {
      id: 1,
      imdb_id: 235,
      genres: [],
      title: "test motj",
      overview: "overview",
      popularity: "popularity",
      poster_path: "poster_path",
      release_date: "release_date",
    };


    movies.push(movie1);

    return movies;
  }

}