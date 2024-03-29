import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  
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

  addToSeenMovies(movie: Movie){
    this.movieService.postSeenitem(movie).subscribe(data=>{console.log(data)})
  }

  ngOnInit(): void {
  }

}
