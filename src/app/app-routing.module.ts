import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListPageComponent },
  { path: 'detail/:id', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
