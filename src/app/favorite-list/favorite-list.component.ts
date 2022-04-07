import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductDB } from '../product.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit {
  products: ProductDB[] = [];
  myPageName: string = 'favorite';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFavoriteProduct();
  }

  getFavoriteProduct() {
    this.http
      .get<ProductDB[]>('https://eshop-iti.herokuapp.com/api/v1/products')
      .subscribe((products) => {
        this.products = products;
      });
  }
}
