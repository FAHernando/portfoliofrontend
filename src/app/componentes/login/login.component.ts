import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private datosPortfolio:PortfolioAlexisService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    }),
    
    this.formLogin = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
  })
   }

  ngOnInit(): void {
  }

  get Email(){
    return this.formLogin.get('email');
  }
  get Password(){
    return this.formLogin.get('password');
  }


  onSubmit(){
   this.datosPortfolio.login(this.formLogin.value)
   .then(response => {
    console.log(response);
    this.router.navigate(['/main'])
  })
  .catch(error => console.log(error));
  }
  onClick(){
    this.datosPortfolio.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error));
  }
  registro(){
    this.router.navigate(['/register'])
  }
}
