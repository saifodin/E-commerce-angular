import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductCart } from './productCart.model';

@Component({
  selector: '[app-product-list]',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: ProductCart[] = [
    new ProductCart(
      'id1',
      'assets/img/shopping-cart/cart-1.jpg',
      'T-shirt Contrast Pocket',
      98.49,
      2
    ),
    new ProductCart(
      'id2',
      'assets/img/shopping-cart/cart-2.jpg',
      'Diagonal Textured Cap',
      98.49,
      1
    ),
    new ProductCart(
      'id3',
      'assets/img/shopping-cart/cart-3.jpg',
      'Basic Flowing Scarf',
      23.4,
      2
    ),
    new ProductCart(
      'id4',
      'assets/img/shopping-cart/cart-4.jpg',
      'Basic Flowing Scarf',
      30.49,
      3
    ),
  ];
  // cartTotal = {
  //   items:this.products.map(e => e.quantity).reduce((prev, next) => prev + next),
  //   total:this.products.map(e => e.totalPrice).reduce((prev, next) => prev + next),
  // }
  // @Output() newItemEvent = new EventEmitter<string>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
  constructor() {}

  ngOnInit(): void {}
}
