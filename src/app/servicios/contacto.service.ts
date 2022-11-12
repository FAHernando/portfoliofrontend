import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  //private apiUrl = 'http://localhost:8080/delete/mensaje/'
  private apiUrl = 'https://heroku-argentinaprograma.herokuapp.com/delete/mensaje/'
  constructor(private http:HttpClient) { }

  public post(url:string, body:any){
    return this.http.post(url, body);
  }
  public get(url:string){
    return this.http.get(url); 
  }
  public delete(id:number):Observable<any>{
    return this.http.delete(this.apiUrl + id);
  }
}
