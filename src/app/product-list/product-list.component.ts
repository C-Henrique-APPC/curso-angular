import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  name: string = '';
  addToCart: number = 0;
  product = {
    name: 'IPonei X',
    price: 600,
    color: 'Black Green',
    discount: 3.5,
    inStock: 5,
    pImg: '/assets/imgs/icons8-iphone-x-100.png',
  };
  getDiscountedPrice(): number {
    return (this.product.price * this.product.discount) / 100;
  }
  // onNameChange(event: any) {
  //   this.name = event.target.valeu;
  // }
  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
