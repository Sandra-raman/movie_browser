import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup
  constructor(private fb:FormBuilder,private api:ApiService,private route:Router){
    this.registerForm=this.fb.group({
      username:["",[Validators.required,Validators.pattern("[a-zA-z _]*")]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.pattern("[a-zA-Z 1-9]*")]]
    })
  }
  Registeration(){
    if(this.registerForm.valid){
      let username=this.registerForm.value.username;
      let email=this.registerForm.value.email;
      let password=this.registerForm.value.password;
      this.api.registerAPI({username,email,password}).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert("Registered")
          this.route.navigateByUrl('/login')
          
        },
        error:(err:any)=>{
          console.log(err);
          alert("already exsist")
        }
      })
    }
    else{
      alert("invalid form")
    }
  }
}
