import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class PortfolioAlexisService {
  
  constructor(private http:HttpClient,
              private auth: Auth) { }
  
  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout(){
    return signOut(this.auth);
  }
}
