// In Angular, a service is an instance of a class that you can make available to any part of your application using Angular's dependency injection system.

import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor(
    private http: HttpClient
  ) { }

  // The addToCart() method appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  // The getItems() method collects the items users add to the cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  // The clearCart() method returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }
}
