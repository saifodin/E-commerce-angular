import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient)
  {

  }
  regestier(formData:any):Observable<any>
  {
   return this._HttpClient.post('https://api/signup',formData)

  }
}
