import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, title: 'Laptop', stock: 10, category: 'Electronics', price: 1000 ,  image: 'assets/images/laptop.png'},
    { id: 2, title: 'Phone', stock: 25, category: 'Electronics', price: 700 ,  image: 'assets/images/phone.png'},
    { id: 3, title: 'Chair', stock: 15, category: 'Furniture', price: 150 ,  image: 'assets/images/chair.png'},
    { id: 4, title: 'Book', stock: 50, category: 'Books', price: 20 ,  image: 'assets/images/book.jpg'}
  ];

  get productNumber(): number {
    return this.products.length;
  }
  selectedCategory: string = 'All';
  selectedTitle: string = '';
  selectedMaxPrice: number | null = null;

  applyFilters(category: string, title: string, price: string) {
    this.selectedCategory = category;
    this.selectedTitle = title;
    this.selectedMaxPrice = price ? +price : null;
  }
  

}
