import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  constructor(public cartService: CartService) {}
}
