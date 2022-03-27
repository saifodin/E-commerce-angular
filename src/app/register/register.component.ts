import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:string='';
  constructor(private _AuthService:AuthService,private _Router:Router) { 

  }

  submit(registerForm:FormGroup)
  {
   this._AuthService.regestier(registerForm.value).subscribe((response)=>{
     if(response.message=='success')
     {
      this._Router.navigate(['/login']);
     }
     else
     {
      this.error = response.errors.email.message; 
     }
   })
   
  }

  registerForm= new FormGroup(
    {
      name:new FormControl(null,[Validators.minLength(3),Validators.required,Validators.pattern('^[a-z]{3,10}$')]),
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]), 
      mobileNumber: new FormControl(null,[Validators.required,Validators.pattern('^(010|011|012|015)[0-9]{8}')]),
      adress: new FormControl(null)
    }
    
  )

 

  ngOnInit(): void {
  }

}
