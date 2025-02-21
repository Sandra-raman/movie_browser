import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
// import autoTable from 'jspdf-autotable'
// import jspdf from 'jspdf';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-view-movies',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './view-movies.component.html',
  styleUrl: './view-movies.component.css'
})
export class ViewMoviesComponent {
  movieId:any=""
  movie:any={}
  relatedmovieArray:any=[]
constructor(private ar:ActivatedRoute,private api:ApiService,private route:Router){}
ngOnInit(): void {
  this.ar.params.subscribe((res:any)=>{
    console.log(res);
    this.movieId=res.id
    console.log(this.movieId);
    this.viewAmovie()
  })
}
 viewAmovie(){
  this.api.getAMovieAPI(this.movieId).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.movieId=res
      
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
 }
}
