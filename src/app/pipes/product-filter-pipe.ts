import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], selectedCategory: string, selectedTitle: string, selectedMaxPrice: number | null): Product[] {
    if (!products) return [];
    if (!selectedCategory && !selectedTitle && selectedMaxPrice == null) {
      return products; // Return all products if no filters are applied
    }
    return products.filter(product => {
      const matchesCategory = !selectedCategory || 
                             selectedCategory === '' || 
                             selectedCategory === 'All' || 
                             selectedCategory.toLowerCase().includes(product.category); // Adjust if product.category is an object
      const matchesTitle = !selectedTitle || 
                          product.title.toLowerCase().includes(selectedTitle.toLowerCase());
      const matchesPrice = selectedMaxPrice == null || 
                          product.price <= selectedMaxPrice;
      return matchesCategory && matchesTitle && matchesPrice;
    });
  }
  

}
