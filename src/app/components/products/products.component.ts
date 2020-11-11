import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = this.productList();

  constructor() { }

  ngOnInit(): void {
  }

  productClicked(product: Product): void {
    console.log('product:', product);
  }

  productList(): Product[] {
    return [
      {
        id: '1',
        image: 'assets/img/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequatur omnis iure molestias itaque magnam adipisci sequi deleniti
          quaerat exercitationem ipsum quidem cum aut ipsa blanditiis, nemo
          architecto odit sed repellat.
        `
      },
      {
        id: '2',
        image: 'assets/img/hoodie.png',
        title: 'Hoodie',
        price: 80000,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequatur omnis iure molestias itaque magnam adipisci sequi deleniti
          quaerat exercitationem ipsum quidem cum aut ipsa blanditiis, nemo
          architecto odit sed repellat.
        `
      },
      {
        id: '3',
        image: 'assets/img/mug.png',
        title: 'Mug',
        price: 80000,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequatur omnis iure molestias itaque magnam adipisci sequi deleniti
          quaerat exercitationem ipsum quidem cum aut ipsa blanditiis, nemo
          architecto odit sed repellat.
        `
      },
      {
        id: '4',
        image: 'assets/img/pin.png',
        title: 'Pin',
        price: 80000,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequatur omnis iure molestias itaque magnam adipisci sequi deleniti
          quaerat exercitationem ipsum quidem cum aut ipsa blanditiis, nemo
          architecto odit sed repellat.
        `
      },
      {
        id: '5',
        image: 'assets/img/stickers1.png',
        title: 'Stickers',
        price: 80000,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequatur omnis iure molestias itaque magnam adipisci sequi deleniti
          quaerat exercitationem ipsum quidem cum aut ipsa blanditiis, nemo
          architecto odit sed repellat.
        `
      },
      {
        id: '6',
        image: 'assets/img/stickers2.png',
        title: 'Stickers',
        price: 80000,
        description: 'bla bla bla bla bla'
      }
    ];
  }

}
