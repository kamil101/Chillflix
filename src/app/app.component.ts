import { Component } from '@angular/core';
import { Film } from './shered/model/film.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chill-flix';
  public films: Film[] = [
    {
      title: 'Strange Animals of Asia',
      releaseDate: 2018,
      url: 'https://www.youtube.com/embed/88-JKzAebLo',
      director: 'Peter'
    },
    {
      title: 'Strange Animals of Asia',
      releaseDate: 2018,
      url: 'https://www.youtube.com/embed/mwgUesU1pz4',
      director: 'Peter'
    }
  ];
}
