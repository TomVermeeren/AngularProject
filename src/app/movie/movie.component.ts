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

  constructor() { }

  ngOnInit(): void {
  }

}
