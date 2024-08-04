import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public cartService: CartService) {}

  addToCart(value: any) {
    this.cartService.addToCart(value);
  }

  @Input()
  id = 0;
  @Input()
  name = '';
  @Input()
  description = '';
  @Input()
  price = 0;
  @Input()
  inStock = 0;

  // @Output() buttonClick = new EventEmitter<any>();

  // clickButton(value: any) {
  //   this.buttonClick.emit(value);
  // }
}
