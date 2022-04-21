import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {

    //defining items property to store the products in the cart
    items = this.cartService.getItems();

    checkoutForm = this.formBuilder.group({name: '', address: ''});

    constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

    onSubmit() {
        //checkout data
        this.items = this.cartService.clearCart();

        console.log(this.checkoutForm.value)
        this.checkoutForm.reset();
    }

    
   

}
