import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  error:string='';
 
  submitLoginForm(loginForm:FormGroup)
  {
   console.log('test');
    this._AuthService.login(loginForm.value).subscribe((response)=>{
        localStorage.setItem('userToken',response.token)
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['']);
     
    })

  }
  loginForm= new FormGroup(
    {
     
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]), 
    
    }
    
  )


 

  ngOnInit(): void {
  }

}
