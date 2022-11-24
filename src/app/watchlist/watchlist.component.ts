import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  @Input() movie: Movie = {id: 1,
    imdb_id: 1,
    genre_ids: [],
    title: "",
    overview: "",
    vote_average: "",
    poster_path: "",
    release_date: "",};

    constructor(private movieService: MovieService) { }

  addToWatchlist(movie: Movie){
    this.movieService.postWatchitem(movie).subscribe(data=>{console.log(data)})
  }

  getSeenMoviesFromOwnAPI(movie: Movie){
    this.movieService.postSeenitem(movie).subscribe(data=>{console.log(data)})
  }

  ngOnInit(): void {
  }

}
