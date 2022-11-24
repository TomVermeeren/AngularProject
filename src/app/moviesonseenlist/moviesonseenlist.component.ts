import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviesonseenlist',
  templateUrl: './moviesonseenlist.component.html',
  styleUrls: ['./moviesonseenlist.component.css']
})
export class MoviesonseenlistComponent implements OnInit {

  searchTerm: String = "";
  movies: Movie[] =[];
  subscription!: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.subscription = this.movieService.getSeenMoviesFromOwnAPI().subscribe(data => this.movies = data);
  }
  onSubmit(): void {
    console.log("submitted")
    this.movieService.getMovies(this.searchTerm).subscribe(data => this.movies = data);;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
