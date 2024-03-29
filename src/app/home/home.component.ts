import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies$: Observable<Movie[]> = new Observable<Movie[]>();
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies("");
  }

}
