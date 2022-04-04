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
  allLoadedProducts: ProductDB[] = [];
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

  ngOnChanges(): void {}

  private fetchProducts(category: string) {
    if (category) {
      this.http
        .get<ProductDB[]>(
          `https://eshop-iti.herokuapp.com/api/v1/products/category/${category}`
        )
        .subscribe((products) => {
          this.loadedProducts = products;
          this.allLoadedProducts = products;
        });
    } else {
      this.http
        .get<ProductDB[]>('https://eshop-iti.herokuapp.com/api/v1/products')
        .subscribe((products) => {
          this.loadedProducts = products;
          this.allLoadedProducts = products;
        });
    }
  }

  resetProducts() {
    this.loadedProducts = [];
    this.allLoadedProducts.forEach((val) =>
      this.loadedProducts.push(Object.assign({}, val))
    );
  }

  filterByPriceParent(newItem: { min: number; max: number }) {
    this.resetProducts();
    this.loadedProducts = this.allLoadedProducts.filter((ele) => {
      return ele.price >= newItem.min && ele.price <= newItem.max;
    });
  }

  filterBySizeParent(size: string) {
    this.resetProducts();
    this.loadedProducts = this.allLoadedProducts.filter((ele) => {
      return ele.sizes.includes(size);
    });
  }

  filterByColorParent(color: string) {
    this.resetProducts();
    this.loadedProducts = this.allLoadedProducts.filter((ele) => {
      for (const objColor of ele.colors) {
        if (objColor.colorName == color) {
          return true;
        }
      }
      return false;
    });
  }
}
