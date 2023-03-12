import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchBoxComponent } from './pages/list-page/components/search-box/search-box.component';
import { MovieListComponent } from './pages/list-page/components/movie-list/movie-list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SearchBoxComponent,
    MovieListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
