import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../home/products/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  @Input() currentProduct: Product = new Product('', '', 0, '', '');

  constructor() {}

  ngOnInit(): void {}
}
