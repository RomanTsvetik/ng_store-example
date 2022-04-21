import { Component } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    products = products;

    share() {
        alert('The product has been shared')
    }

    onNotify() {
        alert('Price is over $700')
    }
}
