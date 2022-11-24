import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesonwatchllistComponent } from './moviesonwatchllist/moviesonwatchllist.component';
import { SeenlistComponent } from './seenlist/seenlist.component';
import { MoviesonseenlistComponent } from './moviesonseenlist/moviesonseenlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MovieComponent,
    HomeComponent,
    MoviesComponent,
    WatchlistComponent,
    MoviesonwatchllistComponent,
    SeenlistComponent,
    MoviesonseenlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
