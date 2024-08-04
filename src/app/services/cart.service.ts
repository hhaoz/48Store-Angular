import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Beautiful',
      price: 100,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Beautiful',
      price: 200,
      inStock: 5,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Beautiful',
      price: 300,
      inStock: 1,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Beautiful',
      price: 400,
      inStock: 4,
    },
  ];

  cart: any[] = [];

  // totalPrice: number = 0;

  addToCart(item: any) {
    if (this.products[item.id - 1].inStock === 0) {
      return;
    }
    let index = this.cart.findIndex((element) => {
      return element.id === item.id;
    });

    this.products[item.id - 1].inStock--;

    if (index !== -1) {
      this.cart[index].quantity++;
      // this.totalPrice = this.cart[index].price * this.cart[index].quantity;
    } else {
      this.cart.push(item);
      // this.totalPrice = item.price;
    }
  }

  removeFromCart(index: any) {
    this.products[this.cart[index].id - 1].inStock += this.cart[index].quantity;
    this.cart.splice(index, 1);
  }
}
