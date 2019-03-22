import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../shered/model/film.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input()
  public film: Film;
  public filmWidth = 240;
  public filmHeight = 160;
}
