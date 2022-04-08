import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartTotal: { cartCount: number; totalPrice: number } = {
    cartCount: 0,
    totalPrice: 0.0,
  };
  UserInfo: any;

  constructor(private _AuthService: AuthService, private http: HttpClient) {
    this.UserInfo = JSON.parse(localStorage.getItem('userInfo')!);
    _AuthService.currentUser.subscribe(() => {
      if (_AuthService.currentUser.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  isLogin: boolean = false;


  isLogOut() {
    this._AuthService.logout();
  }

  ngOnInit(): void {
    this.getCartTotal();
  }

  ngDoCheck() {
    // this.getCartTotal();
  }

  ngAfterViewChecked() {
    // this.getCartTotal();
  }
  ngAfterContentChecked() {
    // this.getCartTotal();
  }

  private getCartTotal() {
    this.http
      .get<{ cartCount: number; totalPrice: number }>(
        `https://eshop-iti.herokuapp.com/api/v1/cart/get/count`
      )
      .subscribe((response) => {
        this.cartTotal = response;
      });
  }
}
