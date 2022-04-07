import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

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

  private getUserInfo(){
    this.http
      .get<any[]>(`https://eshop-iti.herokuapp.com/api/v1/users/get/me`)
      .subscribe((response:any) => {
        console.log(response);
        this.userData = response
        console.log(this.userData.name)
      });
  }

  ngOnInit(): void {

    this.getUserInfo();
  }
}
