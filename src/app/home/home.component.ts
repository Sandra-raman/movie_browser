import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
homeMovieList:any=[]

constructor(private api:ApiService,private route:Router){}
  ngOnInit():void{
    this.gethomeMovie()
  }
  gethomeMovie(){
    this.api.getAllMovieAPI().subscribe((res:any)=>{
      console.log(res);
      this.homeMovieList=res.slice(-9)
      console.log(this.homeMovieList);
      
    })
  }
  viewMovies(id:any){
    if(sessionStorage.getItem("token")){
      this.route.navigateByUrl(`viewMovies/${id}`)
    }
    else{
      alert("Please Login")
    }
    }
}
