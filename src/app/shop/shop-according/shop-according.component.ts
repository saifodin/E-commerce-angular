import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-shop-according',
  templateUrl: './shop-according.component.html',
  styleUrls: ['./shop-according.component.scss'],
})
export class ShopAccordingComponent implements OnInit {
  constructor(private http: HttpClient) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.http
      .get<Category[]>('https://eshop-iti.herokuapp.com/api/v1/categories')
      .subscribe((categories) => {
        this.categories = categories;
        console.log(this.categories);
      });
  }
}
