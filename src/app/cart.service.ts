import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor() { }

  // The addToCart() method appends a product to an array of items
  addToCard(product: Product) {
    this.items.push(product);
  }

  // The getItems() method collects the items users add to the cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  // The clearCart() method returns an empty array of items, which empties the cart
  clearCard() {
    this.items = [];
    return this.items;
  }
}
