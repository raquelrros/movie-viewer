import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchBoxComponent } from './pages/list-page/components/search-box/search-box.component';
import { MovieListComponent } from './pages/list-page/components/movie-list/movie-list.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { MovieDetailsComponent } from './pages/details-page/components/movie-details/movie-details.component';
import { MovieCardComponent } from './pages/list-page/components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SearchBoxComponent,
    MovieListComponent,
    DetailsPageComponent,
    MovieDetailsComponent,
    MovieCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
