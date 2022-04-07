import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../home/products/product.model';
import { ProductDB } from '../product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() currentProduct: ProductDB;
  @Input() pageName: string;
  @Input() allProducts: ProductDB[];

  constructor() {}

  removeFromCart() {
    let index: number = this.allProducts.indexOf(this.currentProduct);
    this.allProducts.splice(index, 1);
    console.log(this.allProducts);
  }

  ngOnInit(): void {}
}
