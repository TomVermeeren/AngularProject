import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movie: Movie = {id: 1,
    imdb_id: 235,
    genres: [],
    title: "test motj",
    overview: "overview",
    popularity: "popularity",
    poster_path: "poster_path",
    release_date: "release_date",};

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
}
