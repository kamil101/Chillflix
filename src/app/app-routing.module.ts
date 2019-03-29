import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MainComponent } from './main/main.component';
import { LiveComponent } from './live/live.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'watch',
    component: LiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
