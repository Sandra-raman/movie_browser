import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import autoTable from 'jspdf-autotable'
import jspdf from 'jspdf';
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
      this.movie=res
      
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
 }
 toDownload(){
  this.api.addToDownload(this.movieId,this.movie).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.generatePDF()
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
 }
 generatePDF(){
  const pdf = new jspdf()
  pdf.setFontSize(16)
  pdf.setTextColor("blue")
  pdf.text(this.movie.title,80,10)
  pdf.setFontSize(12)
  pdf.setTextColor("black")
  pdf.text(`Rating : ${this.movie.rating}`,10,20) 
  pdf.text(`Summary : ${this.movie.description}`,10,30)
  pdf.text(`Link : ${this.movie.imdb_link}`,10,45)
  let head = [['genre']]
  let body = []
  body.push([this.movie.genre])
  autoTable(pdf,{head,body,startY:50})
  pdf.output('dataurlnewwindow')
  pdf.save('download-movie.pdf')
}
SavedRecipe(){
  this.api.addToSave(this.movieId,this.movie).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert("Added to Save")
      this.route.navigateByUrl(`savedMovies`)

      
    },
    error:(err:any)=>{
      console.log(err);
      alert(err.error)
      
    }
  })
 }
}
