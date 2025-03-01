import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn:boolean=false;
  loggedUser:any={}
  loggedUserName:string=""

  ngOnInit(): void {
   if(sessionStorage.getItem("token")){
    this.isLoggedIn=true
    this.loggedUser=JSON.parse(sessionStorage.getItem("User") || " ")
    // console.log(this.loggedUser);
    this.loggedUserName=this.loggedUser.username
    // console.log(this.loggedUserName);
    
    
   }  
  }
}
