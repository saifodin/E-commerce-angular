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

  userData : any;

  constructor(private _AuthService: AuthService, private http: HttpClient) {
   
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
    this.getUserInfo();

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

  private getUserInfo(){
    this.http
      .get<any[]>(`https://eshop-iti.herokuapp.com/api/v1/users/get/me`)
      .subscribe((response:any) => {
        // console.log(response);
        this.userData = response
        // console.log(this.userData.name)
      });
  }

}
