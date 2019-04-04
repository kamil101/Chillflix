import { Injectable } from '@angular/core';
import { Film } from './shered/model/film.model';
import { Category } from './shered/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public films: Film[] = [];
  public categories: Category[] = [
    {
      name: 'Sport',
      films: [
        {
          title: '20-Minute Victoria Sport',
          releaseDate: 2018,
          url: '3TJP5a3pBME',
          director: 'Monica'
        },
        {
          title: 'Sport Music - Gym Music',
          releaseDate: 2018,
          url: '_tvQECA__eE',
          director: 'Workout Music Service'
        },
        {
          title: 'Most famous sports',
          releaseDate: 2017,
          url: 'nITM5rfK5Gg',
          director: 'Simbly Chumma'
        }
      ]
    },
    {
      name: 'Animals',
      films: [
        // TODO: ADd films here!
        {
          title: 'Strange Animals of Asia',
          releaseDate: 2018,
          url: '88-JKzAebLo',
          director: 'Peter'
        },
        {
          title: 'Wild Animals Life',
          releaseDate: 2017,
          url: '1jPQu4GNj40',
          director: 'Samir'
        },
        {
          title: 'Amazing Animals',
          releaseDate: 2016,
          url: 'ua3fq-yw6cY',
          director: 'Jan'
        }
      ]
    },
    {
      name: 'popular',
      films: [
        // TODO: ADd films here!
        {
          title: 'What Every Country In the World Is Best At?',
          releaseDate: 2018,
          url: 'WkLsAJ2TEEE',
          director: 'BRIGHT SIDE'
        },
        {
          title: 'Popular 3D music',
          releaseDate: 2019,
          url: '-EVOdvz76P4',
          director: 'ADMusic'
        },
        {
          title: 'Saxophone Cover Popular',
          releaseDate: 2018,
          url: 'kLP4O9U-8YM',
          director: 'Música Mexicanos'
        }
      ]
    },
    {
      name: 'Mountains',
      films: [
        // TODO: ADd films here!
        {
          title: 'The Mountains - Vangelis',
          releaseDate: 2016,
          url: 'QFlcs8vwLK4',
          director: 'yeniseyfree'
        },
        {
          title: 'Mountains | Beautiful Chill',
          releaseDate: 2016,
          url: 'E055GXcXPSQ',
          director: 'BLUME'
        },
        {
          title: 'Magic of the Mountains',
          releaseDate: 2015,
          url: '9wAft7t8k2c',
          director: 'The Secrets of Nature'
        }
      ]
    },

    {
      name: 'History',
      films: [
        // TODO: ADd films here!
        {
          title: 'History of England',
          releaseDate: 2017,
          url: 'joErUdT-bD0',
          director: 'Fire Of Learning'
        },
        {
          title: 'World War One (ALL PARTS)',
          releaseDate: 2016,
          url: 'fi1OyVB2laY',
          director: 'Epic History TV'
        },
        {
          title: 'Ancient Egypt Documentary',
          releaseDate: 2013,
          url: 'KuUMe-43A3E',
          director: 'Justin Walsh'
        }
      ]
    },

    {
      name: 'Lake',
      films: [
        // TODO: ADd films here!
        {
          title: '12 Strangest Lakes in the World',
          releaseDate: 2017,
          url: 'r07Mrxlxb1c',
          director: 'American Eye'
        },
        {
          title: 'Lake Louise & Moraine',
          releaseDate: 2015,
          url: 'WteZwxsvICc',
          director: 'Amazing Places on Our Planet'
        },
        {
          title: 'Top 10 Lakes in the World',
          releaseDate: 2018,
          url: 'y3JemKZxIn0',
          director: 'Top-5 Top-10'
        }
      ]
    }
  ];
  addMovie: any;

  constructor() {}

  getMovieByUrl(url: string): Film {
    for (const category of this.categories) {
      for (const film of category.films) {
        if (film.url === url) {
          return film;
        }
      }
    }
    return null;
  }
}
