import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-movies',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NgxPaginationModule,SearchPipe,FormsModule],
  templateUrl: './all-movies.component.html',
  styleUrl: './all-movies.component.css'
})
export class AllMoviesComponent {
movieList:any=[]
nestedgenreArray:any=[]
newgenreArray:any=[]
updategenreArray:any=[]
dummymovieList:any=[]
p: number = 1;
searchkey:string=""

constructor (private api:ApiService,private route:Router){}
ngOnInit():void{
  this.getMovies()
}
getMovies(){
  this.api.getAllMovieAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.movieList=res
      this.dummymovieList=res
      console.log(this.movieList);
      
      //genre filter
      this.nestedgenreArray=this.movieList.map((item:any)=>item.genre)
      console.log(this.nestedgenreArray);
      console.log(this.nestedgenreArray.flat());
      this.newgenreArray= this.nestedgenreArray.flat()
      
      
      this.newgenreArray.forEach((item:any) => {
        !this.updategenreArray.includes(item)&&this.updategenreArray.push(item)
        
      });
      console.log(this.updategenreArray);
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
  

}
filterGenre(key:string,value:string){
  this.movieList=this.dummymovieList.filter((item:any)=>
    item[key].includes(value))
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
