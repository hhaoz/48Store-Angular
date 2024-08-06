import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from '../../pages/cart/cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  protected readonly CartComponent = CartComponent;
}
