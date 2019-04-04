import { Component, OnInit } from '@angular/core';
import { FilmForm } from './film.form';
import { Film } from '../shered/model/film.model';
import { Category } from '../shered/model/category.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  /** Form that belongs to this component */
  public filmForm: FilmForm = new FilmForm();
  public categories: Category[];
  constructor(dataService: DataService) {
    this.categories = dataService.categories;
  }

  public onFormSubmit() {
    const film: Film = this.filmForm.getModel();
    alert(`
Hi ${film.title} ${film.director}!
You have been registered to our website.
Prepare to be spammed regularly, starting today! :D
The Url we have is ${film.url || 'unknown'},
we even know your re, which is ${film.releaseDate || 'unknown'}
    `);
  }
  ngOnInit() {}
}
