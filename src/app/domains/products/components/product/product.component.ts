import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addCart: EventEmitter<Product> = new EventEmitter<any>();
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.product)
  }
}
