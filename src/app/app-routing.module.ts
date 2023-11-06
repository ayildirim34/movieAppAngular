import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponenet } from './movies/movies.component';

const routes : Routes = [
  {path:'movies', component: MoviesComponenet}
]

@NgModule({
exports: [RouterModule],
imports: [ RouterModule.forRoot (routes)]
})
export class AppRoutingModule { }
