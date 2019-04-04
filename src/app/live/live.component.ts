import { Component, OnInit } from '@angular/core';
import { Film } from '../shered/model/film.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  public film: Film;
  constructor(
    readonly dataService: DataService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe(params => {
      const url = params.get('url');
      this.film = dataService.getMovieByUrl(url);
    });
  }

  ngOnInit() {}
}
