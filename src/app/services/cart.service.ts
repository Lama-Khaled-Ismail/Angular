import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[]= [];
  private readonly cartKey = 'cart';
  
  private cartSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    this.initializeCart();
  }

  private initializeCart(): void {
    this.cart = [];
    try {
      const savedCart = localStorage.getItem(this.cartKey);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        this.cart = Array.isArray(parsedCart)
          ? parsedCart.filter((item: any): item is CartItem =>
              typeof item.id === 'number' &&
              typeof item.title === 'string' &&
              typeof item.price === 'number' &&
              typeof item.quantity === 'number' &&
              typeof item.total === 'number' &&
              typeof item.image === 'string'
            )
          : [];
      }
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      this.cart = [];
    }
    this.cartSubject.next(this.cart);
  }

  getCart(): any[] {
    return Array.isArray(this.cart) ? this.cart : [];
  }

  get cart$() {
    return this.cartSubject.asObservable();
  }

  private save() {
    
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  addToCart(product: any) {
    if (!Array.isArray(this.cart)) {
      this.cart = [];
    }
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      const newItem: CartItem = {
        id: product.id ?? 0, 
        title: product.title ?? 'Unknown Product',
        price: product.price ?? 0,
        quantity: 1,
        total: (product.price ?? 0) * 1,
        image: product.images[0] ?? ''
      };
      this.cart.push(newItem);
    }
    this.save();
  }

  updateQuantity(productId: number, quantity: number) {
    if (!Array.isArray(this.cart)) {
      this.cart = [];
    }
    const item = this.cart.find(p => p.id === productId);
    if (item) {
      item.quantity = quantity;
      this.save();
    }
  }

  removeFromCartProductById(productId: number) {
    if (!Array.isArray(this.cart)) {
      this.cart = [];
    }
    this.cart = this.cart.filter(p => p.id !== productId);
    this.save();
  }

  getTotalCount(): number {
    return Array.isArray(this.cart) ? this.cart.reduce((acc, item) => acc + item.quantity, 0) : 0;
  }

  getTotalPrice(): number {
    return Array.isArray(this.cart) ? this.cart.reduce((acc, item) => acc + item.total, 0) : 0;
  }

  clearCart() {
    this.cart = [];
    this.save();
  }
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}