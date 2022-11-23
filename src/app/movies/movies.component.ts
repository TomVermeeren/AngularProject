import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { MovieService } from '../movie.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  searchTerm: String = "";
  movies: Movie[] =[];
  subscription!: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.subscription = this.movieService.getMovies("").subscribe(data => this.movies = data.results);
  }
  onSubmit(): void {
    console.log("submitted")
    this.movieService.getMovies(this.searchTerm).subscribe(data => this.movies = data.results);;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
