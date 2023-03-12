import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { movieDetailsResolver } from './services/movie-details.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListPageComponent },
  {
    path: 'detail/:id',
    component: DetailsPageComponent,
    resolve: { movieDetail: movieDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
