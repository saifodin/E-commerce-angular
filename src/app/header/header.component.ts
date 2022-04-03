import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _AuthService:AuthService)  {
  _AuthService.currentUser.subscribe(()=>{

    if(_AuthService.currentUser.getValue()!=null)
    {
      this.isLogin = true;
    }
    else
    {
      this.isLogin =false;
    }
  })
   }
isLogin:boolean= false;
isLogOut()
{
  this._AuthService.logout()
}
  ngOnInit(): void {
  }

}
