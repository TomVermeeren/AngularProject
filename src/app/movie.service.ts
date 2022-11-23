import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [];

  api_key = "206819812f207cb0e7f60c698ee380a1"
  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this.httpClient.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.api_key);
  }

  getMovieById(id: number): Observable<any> {
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.api_key + "&language=en-US&page=1%22")));
  }
  
}