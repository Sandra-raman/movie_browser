import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url='http://localhost:3000'
  constructor(private http:HttpClient) { }

  getAllMovieAPI(){
    return this.http.get(`${this.server_url}/allMovies`)
  }
   //path: http://localhost:3000/register
registerAPI(reqBody:any){
  return this.http.post(`${this.server_url}/register`,reqBody)
}
 //path: http://localhost:3000/login
 loginAPI(reqBody:any){
  return this.http.post(`${this.server_url}/login`,reqBody)
 } 
  appendToken(){
    let headers=new HttpHeaders()
    const token=sessionStorage.getItem("token")
    
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
   }

  getAMovieAPI(id: any) {
    return this.http.get(`${this.server_url}/getAMovie/${id}`, this.appendToken());
  }
}
