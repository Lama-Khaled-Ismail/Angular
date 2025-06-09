import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product:any;
  loading = true;
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService
    ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') ??'-1';
    
    
    this.productService.getProductById(id).subscribe({
      next: res => {
          this.product = res,
          this.loading = false;
      },
      error: err => {
        console.error("Error Fetching Product by ID", err);
        this.loading = false;
      }
    });
  }
  
   addToCart() {
    this.cartService.addToCart(this.product);
   }
  
  

}
