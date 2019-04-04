import { Component, OnInit } from '@angular/core';
import { Category } from '../shered/model/category.model';
import { DataService } from '../data.service';
import { Film } from '../shered/model/film.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public categories: Category[];
  constructor(private readonly dataService: DataService) {
    this.categories = dataService.categories;
  }

  ngOnInit() {}
}
