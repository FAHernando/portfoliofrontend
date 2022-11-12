import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPorfolio:any;
  api:any;
  constructor(private datosPortfolio:PortfolioAlexisService,
              private persona:PersonaService,
              private router: Router, ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });
    this.cargarData();
  }
  cargarData(): void {
    this.persona.get('https://heroku-argentinaprograma.herokuapp.com/ver/personas')
    .subscribe((data:any) => {
      this.api = data;
    })
  }
  volver(){
    this.router.navigate(['main'])
  }
}
