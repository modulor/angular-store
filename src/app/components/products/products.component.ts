import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.products = this.productService.getAllProducts();
  }

  productClicked(product: Product): void {
    console.log('product:', product);
  }

}
