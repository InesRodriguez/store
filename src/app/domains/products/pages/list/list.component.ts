import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartservice = inject(CartService);
  cart = this.cartservice.cart;
  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now() as number,
        title: 'Prod 1',
        price: 100,
        image: `https://picsum.photos/640/640?r=${Math.random()}`,
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() as number,
        title: 'Prod 2',
        price: 100,
        image: `https://picsum.photos/640/640?r=${Math.random()}`,
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() as number,
        title: 'Prod 3',
        price: 100,
        image: `https://picsum.photos/640/640?r=${Math.random()}`,
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(event: any) {
    const product = event as Product;
    this.cartservice.addToCart(product);
  }
}
