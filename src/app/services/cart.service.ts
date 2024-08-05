import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Áo thun sợi nhân tạo',
      price: 229000,
      decription: 'Áo thun sợi nhân tạo, thoáng mát, thấm hút mồ hôi tốt',
      img: 'assets/img/product1.png',
      inStock: 10,
    },
    {
      id: 2,
      name: 'Áo thun trơn cổ tròn',
      price: 199000,
      decription: '',
      img: 'assets/img/product2.png',
      inStock: 5,
    },
    {
      id: 3,
      name: 'Áo thun trơn tay dài',
      price: 249000,
      decription: '',
      img: 'assets/img/product3.png',
      inStock: 1,
    },
    {
      id: 4,
      name: 'Áo thun tay ngắn họa tiết',
      price: 199000,
      decription: '',
      img: 'assets/img/product4.png',
      inStock: 4,
    },
  ];

  cart: any[] = [];

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
    } else {
      this.cart.push(item);
    }
  }

  removeFromCart(index: any) {
    // this.products[this.cart[index].id - 1].inStock += this.cart[index].quantity;
    this.cart.splice(index, 1);
  }
}
