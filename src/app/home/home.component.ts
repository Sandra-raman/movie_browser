import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
homeMovieList:any=[]
constructor(private api:ApiService){}
  ngOnInit():void{
    this.gethomeRecipe()
  }
  gethomeRecipe(){
    this.api.getAllMovieAPI().subscribe((res:any)=>{
      console.log(res);
      this.homeMovieList=res.slice(-9)
      console.log(this.homeMovieList);
      
    })
  }
}
