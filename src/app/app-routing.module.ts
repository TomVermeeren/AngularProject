import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesonseenlistComponent } from './moviesonseenlist/moviesonseenlist.component';
import { MoviesonwatchllistComponent } from './moviesonwatchllist/moviesonwatchllist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {
    path: '', component: MoviesComponent
  },
  {
    path: 'watchlist', component: MoviesonwatchllistComponent
  },
  {
    path: 'bekekenfilms', component: MoviesonseenlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
