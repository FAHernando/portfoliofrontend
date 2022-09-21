import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../model/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {


  /*private apiUrl = 'http://localhost:8080/delete/trabajo/'
  private urlApi = 'http://localhost:8080/ver/trabajo/'
  private urlPost = /*'https://crossorigin.me/*//*'http://localhost:8080/modificar/trabajo/'
  private apiServerUrl= 'http://localhost:8080'*/

  private apiUrl = 'https://portfoliobackendweb.herokuapp.com/delete/trabajo/'
  private urlApi = 'https://portfoliobackendweb.herokuapp.com/ver/trabajo/'
  private urlPost = 'https://portfoliobackendweb.herokuapp.com/modificar/trabajo/'
  private apiServerUrl = 'https://portfoliobackendweb.herokuapp.com'


  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url); 
  }
  public post(url:string, body:any){
    return this.http.post(url, body);
  }
  public eliminar(id:number):Observable<any>{
    return this.http.delete(this.apiUrl + id);
  }
  
  public getTrabajo(id: string):Observable<Trabajo>{
    let direccion = this.urlApi + id;
    return this.http.get<Trabajo>(direccion);
  }
  public putTrabajo(form:Trabajo, id:number):Observable<Trabajo>{
    let direccion = this.urlPost + id;
    return this.http.put<Trabajo>(direccion, form);
  }
 
}
