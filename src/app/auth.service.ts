import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = null;

  saveCurrentUser()
  {
    let token:any = localStorage.getItem('userToken');
    this.currentUser=jwtDecode(token);
    console.log(this.currentUser);
  }
  constructor(private _HttpClient:HttpClient)
  {

  }
  regestier(formData:any):Observable<any>
  {
   return this._HttpClient.post('https://eshop-iti.herokuapp.com/api/v1/users/register',formData)

  }
  login(formData:any):Observable<any>
  {
   return this._HttpClient.post('https://api/login',formData)

  }
}
