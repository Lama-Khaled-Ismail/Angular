import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from './../../models/Product';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:Product[] = [];
  categories:Category[] =[];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
       
      },
      error: () => {
        console.error('Failed to load products');
      }
    });
    this.productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
       
      },
      error: () => {
        console.error('Failed to load categories');
      }

      })
  }

  getproductNumber():number {
    return this.products.length;
  }
  selectedCategory: string = 'All';
  selectedTitle: string = '';
  selectedMaxPrice: number | null = null;

  applyFilters(category: string, title: string, price: string) {
    this.selectedCategory = category;
    this.selectedTitle = title;
    this.selectedMaxPrice = price ? +price : null;

    console.log('Applied filters:', {
    category: this.selectedCategory,
    title: this.selectedTitle,
    maxPrice: this.selectedMaxPrice
  });
  }

  resetFilters(): void {
  this.selectedCategory = 'All';
  this.selectedTitle = '';
  this.selectedMaxPrice = null;
  }
  

}
