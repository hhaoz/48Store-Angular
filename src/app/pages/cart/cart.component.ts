import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }
}
