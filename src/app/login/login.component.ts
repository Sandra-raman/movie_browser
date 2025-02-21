import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup
  constructor(private  fb:FormBuilder,private api:ApiService,private route:Router){
    this.loginForm=this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.pattern("[a-zA-Z 1-9]*")]]
    })
  }
  login(){
    if(this.loginForm.valid){
      let email=this.loginForm.value.email;
      let password=this.loginForm.value.password;
      console.log(email,password);
      
      this.api.loginAPI({email,password}).subscribe({
        next:(res:any)=>{
          console.log(res);
          sessionStorage.setItem("User",JSON.stringify(res.exsistingUser))
          sessionStorage.setItem("token",res.token)
          this.loginForm.reset()
          if(res.exsistingUser.role=="User")
        {
          alert("Login Successfull")
          this.route.navigateByUrl('/')
        }
         else{
          this.route.navigateByUrl('/admin')
         } 
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }
    else{
      alert("invalid form")
    }
  
  }
}
