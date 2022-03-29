import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCart } from '../productCart.model';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() currentProduct: ProductCart = new ProductCart('', '', '', 0, 0);
  @Input() productsCard: ProductCart[] = [];
  cartTotal = {
    
  }

  increaseQuantity() {
    this.currentProduct.quantity += 1;
    this.currentProduct.totalPrice = Number(
      (this.currentProduct.quantity * this.currentProduct.price).toFixed(2)
    );
  }

  decreaseQuantity() {
    if (this.currentProduct.quantity > 1) {
      this.currentProduct.quantity -= 1;
      this.currentProduct.totalPrice = Number(
        (this.currentProduct.quantity * this.currentProduct.price).toFixed(2)
      );
    }
  }
  removeFromCart() {
    var index: number = this.productsCard.indexOf(this.currentProduct);
    this.productsCard.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
