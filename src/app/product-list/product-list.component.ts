import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products = [...products];

  ngOnInit() {}

  share() {
    window.alert('The product has been shared!');
  }

  // Define the behavior that happens when the user clicks the button. The parent, ProductListComponent —not the ProductAlertsComponent— acts when the child raises the event. In product-list.component.ts, define an onNotify() method, similar to the share() method.
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/