import { Component } from '@angular/core';
import { ProductService } from '../Services/product-service.service';
import { Product } from '../modules/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true,
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (products) => { // ✅ on reçoit déjà le tableau
        this.products = products;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  handelDelete(product: Product): void {
    const confirmed = confirm('Êtes-vous sûr de vouloir supprimer ce produit ?');
    if (confirmed) {
      this.productService.deleteProduct(product.id).subscribe(
        () => {
          this.getAllProducts();
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
