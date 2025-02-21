import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allMovies: any[],searchkey:string): any[] {
    if(!allMovies||!searchkey){
      return allMovies;

    }
    return allMovies.filter((item:any)=>
  item.title.toLowerCase().trim().includes(searchkey.toLowerCase().trim())
  );
    
  }

}
