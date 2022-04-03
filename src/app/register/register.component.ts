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
    
      this._Router.navigate(['/login']);
     
    
   })
   
  }

  registerForm= new FormGroup(
    {
      name:new FormControl(null,[Validators.minLength(3),Validators.required,Validators.pattern('^[a-z]{3,10}$')]),
      email:new FormControl(null,[Validators.email,Validators.required]), 
      password:new FormControl(null,[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
      adress: new FormControl(null)
    }
    
  )

 

  ngOnInit(): void {
  }

}
