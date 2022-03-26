import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../home/products/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() currentProduct: Product = new Product('', '', 0, '', '');
  // @Input() currentProductShop: ProductShop = new ProductShop('', '', 0, '');


  constructor() {}

  ngOnInit(): void {}
}
