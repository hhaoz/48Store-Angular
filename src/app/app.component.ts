import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CartService } from './services/cart.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first-webstorm';

  constructor(public cartService: CartService) {}

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  // cart: any[] = [];

  // addToCart(value: any) {
  //   this.cart.push(value);
  //   console.log('Cart:', this.cart);
  // }
}
