import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-seenlist',
  templateUrl: './seenlist.component.html',
  styleUrls: ['./seenlist.component.css']
})
export class SeenlistComponent implements OnInit {

  @Input() movie: Movie = {id: 1,
    imdb_id: 1,
    genre_ids: [],
    title: "",
    overview: "",
    vote_average: "",
    poster_path: "",
    release_date: "",};
    constructor(private movieService: MovieService) { }

    getSeenMoviesFromOwnAPI(movie: Movie){
      this.movieService.postSeenitem(movie).subscribe(data=>{console.log(data)})
    }
  ngOnInit(): void {
  }

}
