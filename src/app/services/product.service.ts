import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Category } from './../models/Category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {
    
   }
   getProducts():Observable<ProductResponse>{
      return this.http.get<ProductResponse>(this.apiUrl);
   }
   getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl+'/categories');
   }
   getProductById(id: string): Observable<Product> {
    return this.http.get<any>(this.apiUrl+'/'+id);
  }
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

