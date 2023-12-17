import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent implements OnInit {
  private productService = inject(ProductService);
  product = signal<Product | null>(null);
  cover = signal<string>('');
  @Input() id?: string;
  ngOnInit(): void {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        }
      });
    }
  }
  changeCover(newImage: string) {
    this.cover.set(newImage);
  }
}
