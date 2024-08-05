import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    public cartService: CartService,
  ) {}

  currentUser!: any;

  async login() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );

    this.currentUser = credential.user;
    const token = await credential.user.getIdToken();
    console.log(token);
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
    this.cartService.cart = [];
  }
}
