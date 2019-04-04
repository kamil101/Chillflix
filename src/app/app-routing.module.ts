import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MainComponent } from './main/main.component';
import { LiveComponent } from './live/live.component';
import { from } from 'rxjs';
import { AdministrationComponent } from './administration/administration.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'watch/:url',
    component: LiveComponent
  },
  {
    path: 'admin',
    component: AdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
