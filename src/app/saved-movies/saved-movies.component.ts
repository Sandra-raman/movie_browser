import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-saved-movies',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './saved-movies.component.html',
  styleUrl: './saved-movies.component.css'
})
export class SavedMoviesComponent implements OnInit{
SavedList:any=[]
constructor(private api:ApiService){}
ngOnInit(): void {
  this.getSavedMovie()
}
getSavedMovie(){
  this.api.getSavedMovieAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.SavedList=res
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
 }
 deleteSavedRecipe(id:any){
  this.api.deleteMovieAPI(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.getSavedMovie()
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
 }
}
