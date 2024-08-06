import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButton],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  detailProduct!: ProductModel;
  @Input() product!: ProductModel;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
  ) {
    const { id } = this.activatedRoute.snapshot.params;

    //   find product by id
    this.detailProduct = this.cartService.products.find(
      (product) => product.id == parseInt(id),
    ) as ProductModel;
  }

  addToCart(value: any) {
    if (this.authService.currentUser) {
      this.cartService.addToCart(value);
    } else {
      alert('Vui lòng đăng nhập');
    }
  }
}
