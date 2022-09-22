import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Estudio } from '../model/estudio';
import { ResponseI } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
 

  /*private apiUrl = 'http://localhost:8080/delete/estudio/'
  private urlApi = 'http://localhost:8080/ver/estudio/'
  private urlPost = /*'https://crossorigin.me/*//*'http://localhost:8080/modificar/estudio/'
  private apiServerUrl= 'http://localhost:8080'*/

  private apiUrl = 'https://heroku-argentinaprograma.herokuapp.com/delete/estudio/'
  private urlApi = 'https://heroku-argentinaprograma.herokuapp.com/ver/estudio/'
  private urlPost = 'https://heroku-argentinaprograma.herokuapp.com/modificar/estudio/'
  private apiServerUrl = 'https://heroku-argentinaprograma.herokuapp.com'

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
  
  public getEstudio(id: string):Observable<Estudio>{
    let direccion = this.urlApi + id;
    return this.http.get<Estudio>(direccion);
  }
  public putEstudio(form:Estudio, id:number):Observable<Estudio>{
    let direccion = this.urlPost + id;
    return this.http.put<Estudio>(direccion, form);
  }
 
}

