import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private datosPortfolio:PortfolioAlexisService,
    private router: Router,
    private formbuilder:FormBuilder
  ) { 
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    }),
    
    this.formReg = this.formbuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      terminos:['',[Validators.required, Validators.requiredTrue]]
  })
  }

  ngOnInit(): void {
  }
  /*onClick(){
    this.datosPortfolio.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }*/
  onClick(){
    this.router.navigate(['/login'])
  }
  
  onSubmit(){
    this.datosPortfolio.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
  get Email()
  {
    return this.formReg.get('email');
  }

  get Password()
  {
    return this.formReg.get('password');
  }

}
