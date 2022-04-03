import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDB } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: [],
})
export class ShopComponent implements OnInit {
  loadedProducts: ProductDB[] = [];
  category: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.params['category'];
    if (this.category) {
      this.fetchProducts(this.category);
    }
    this.fetchProducts('');
  }

  private fetchProducts(category: string) {
    if (category) {
      this.http
        .get<ProductDB[]>(
          `https://eshop-iti.herokuapp.com/api/v1/products/category/${category}`
        )
        .subscribe((products) => {
          this.loadedProducts = products;
          console.log('caterogy');
        });
    } else {
      this.http
        .get<ProductDB[]>('https://eshop-iti.herokuapp.com/api/v1/products')
        .subscribe((products) => {
          this.loadedProducts = products;
          console.log('not caterogy');
        });
    }
  }
}
