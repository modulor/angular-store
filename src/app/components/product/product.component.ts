import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productButtonClicked: EventEmitter<Product> = new EventEmitter();

  today = new Date();

  addProductToCart(product: Product): void {
    this.productButtonClicked.emit(product);
  }
}
