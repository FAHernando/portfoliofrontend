import { Component, OnInit } from '@angular/core';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPortfolio:PortfolioAlexisService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });
  }

}
