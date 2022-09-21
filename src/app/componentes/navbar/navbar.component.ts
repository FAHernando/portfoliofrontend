import { Component, OnInit } from '@angular/core';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  educacionList:any;
  constructor(private datosPortfolio:PortfolioAlexisService,
              private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educacionList=data.education;
    })
  }
  exp(){
    this.router.navigate(['experiencia-laboral'])
  }
  inicio(){
    this.router.navigate(['main'])
  }
  contacto(){
    this.router.navigate(['contacto'])
  }
  estudio(){
    this.router.navigate(['estudios'])
  }

}
