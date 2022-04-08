import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
   
  ) {}

  error: string = '';

  submitLoginForm(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe((response) => {

       console.log(response);   
        localStorage.setItem('userToken', response.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['']);
      
      
    },(error)=>{
      this.error = error.error
    });
  }
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  ngOnInit(): void {}
}
