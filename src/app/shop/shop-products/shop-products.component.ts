import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/home/products/product.model';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {
  products: Product[] = [
    new Product(
      'assets/img/product/product-1.jpg',
      'Piqué Biker Jacket',
      343,
      '', //badge (sale, '')
      ''
    ),
    new Product(
      'assets/img/product/product-2.jpg',
      'Piqué Biker Jacket',
      43.48,
      '',
      ''
    ),
    new Product(
      'assets/img/product/product-3.jpg',
      'Multi-pocket Chest Bag',
      43.48,
      '',
      ''
    ),
    new Product(
      'assets/img/product/product-4.jpg',
      'Multi-pocket Chest Bag',
      43.48,
      'sale',
      ''
    ),
    new Product(
      'assets/img/product/product-5.jpg',
      'Multi-pocket Chest Bag',
      43.48,
      '',
      ''
    ),
    new Product(
      'assets/img/product/product-6.jpg',
      'Multi-pocket Chest Bag',
      43.48,
      '',
      ''
    ),
    new Product(
      'assets/img/product/product-7.jpg',
      'Multi-pocket Chest Bag',
      43.48,
      '',
      ''
    ),
    new Product(
      'assets/img/product/product-8.jpg',
      'Multi-pocket Chest Bag',
      43.48,
      '',
      ''
    ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
