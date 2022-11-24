import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  movies: Movie[] = [];

  api_key = "206819812f207cb0e7f60c698ee380a1"
  constructor(private httpClient: HttpClient) {
  }

  getMovies(searchTerm: String): Observable<any> {
    if(searchTerm==""){
      
    return this.httpClient.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.api_key);
    
    }
  else{
    console.log(searchTerm)
    return this.httpClient.get<any>("https://api.themoviedb.org/3/search/movie?api_key=" + this.api_key + "&query=" + searchTerm);
  }
  }

  postWatchitem(movieToAddToWatchlist: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=utf-8");
    return this.httpClient.post<Movie>("http://localhost:3000/watchlist", movieToAddToWatchlist, {headers: headers})
  }

  postSeenitem(movieToAddToSeenlist: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=utf-8");
    return this.httpClient.post<Movie>("http://localhost:3000/filmsgekeken", movieToAddToSeenlist, {headers: headers})
  }

  getWatchlistFromOwnAPI(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/watchlist");
  }

  getSeenMoviesFromOwnAPI(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/filmsgekeken");
  }
  
}