import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

// ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters
// By injecting ActivatedRoute, you are configuring the component to use a service.
export class ProductDetailsComponent implements OnInit {

  // Inject route, cart service by adding to the constructor()
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  product: Product | undefined;

  // The addToCart() method does the following: takes the current product as an argument, uses the CartService addToCart() method to add the product to the cart, displays a message that you've added a product to the cart
  addToCart(product: Product) {
    this.cartService.addToCard(product);
    window.alert('Your product has been added to the cart');
  }

  // In the ngOnInit() method, extract the productId from the route parameters and find the corresponding product in the products array.
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route
    // The route parameters correspond to the path variables you define in the route. To access the route parameters, we use route.snapshot, which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time. The URL that matches the route provides the productId . Angular uses the productId to display the details for each unique product.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
