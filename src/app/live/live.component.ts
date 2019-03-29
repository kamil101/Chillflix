import { Component, OnInit } from '@angular/core';
import { Film } from '../shered/model/film.model';
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
