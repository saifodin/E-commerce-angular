import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDB } from '../product.model';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: []
})
export class ShopComponent implements OnInit {

  loadedProducts: ProductDB[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.http
      .get<ProductDB[]>('https://eshop-iti.herokuapp.com/api/v1/products')
      .subscribe((products) => {
        this.loadedProducts = products;
      });
  }
}
