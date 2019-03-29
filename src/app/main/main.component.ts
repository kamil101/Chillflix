import { Component, OnInit } from '@angular/core';
import { Film } from '../shered/model/film.model';
import { Category } from '../shered/model/category.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
    },
    {
      title: 'What Every Country In the World Is Best At? of Asia',
      releaseDate: 2018,
      url: 'https://www.youtube.com/embed/WkLsAJ2TEEE',
      director: 'BRIGHT SIDE'
    }
  ];
  public categories: Category[] = [
    {
      name: 'Sport',
      films: this.films
    },
    {
      name: 'Animals',
      films: [
        // TODO: ADd films here!
        {
          title: 'Strange Animals of Asia',
          releaseDate: 2018,
          url: 'https://www.youtube.com/embed/mwgUesU1pz4',
          director: 'Peter'
        }
      ]
    },
    {
      name: 'popular',
      films: [
        // TODO: ADd films here!
        {
          title: 'What Every Country In the World Is Best At? of Asia',
          releaseDate: 2018,
          url: 'https://www.youtube.com/embed/WkLsAJ2TEEE',
          director: 'BRIGHT SIDE'
        }
      ]
    },
    {
      name: 'mountains',
      films: [
        // TODO: ADd films here!
        {
          title: 'The Mountains - Vangelis',
          releaseDate: 2016,
          url: 'https://www.youtube.com/embed/QFlcs8vwLK4',
          director: 'yeniseyfree'
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
