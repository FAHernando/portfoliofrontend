import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  /*miPorfolio:any;*/
  header:any;
  constructor(private datosPortfolio:PortfolioAlexisService,
              private persona:PersonaService,
              private router: Router) { }

  ngOnInit(): void {
    /*this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });*/
    this.cargarData();
  }
  cargarData(): void {
    this.persona.get(`https://heroku-argentinaprograma.herokuapp.com/ver/personas`)
    .subscribe((data:any) => {
      this.header = data;
    })
  }
  sobremi(){
    this.router.navigate(['acerca'])
  }
}
