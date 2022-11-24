import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';

@Component({
  selector: 'app-moviesonwatchllist',
  templateUrl: './moviesonwatchllist.component.html',
  styleUrls: ['./moviesonwatchllist.component.css']
})
export class 
MoviesonwatchllistComponent implements OnInit {


  searchTerm: String = "";
  movies: Movie[] =[];
  subscription!: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.subscription = this.movieService.getWatchlistFromOwnAPI().subscribe(data => this.movies = data);
  }
  onSubmit(): void {
    console.log("submitted")
    this.movieService.getMovies(this.searchTerm).subscribe(data => this.movies = data);;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
