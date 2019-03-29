import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../shered/model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor() {}
  @Input()
  public category: Category;

  ngOnInit() {}
}
