import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrabajoService } from 'src/app/servicios/trabajo.service';
import { HttpClient } from '@angular/common/http';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  trabajoList:any;

  constructor(private http:HttpClient,
    private trabajoService: TrabajoService,
    private router: Router,
    private datosPortfolio:PortfolioAlexisService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.trabajoList=data.education;
    })
    this.cargarData();
  }
  cargarData(): void {
    this.trabajoService.get(`https://heroku-argentinaprograma.herokuapp.com/ver/trabajos`)
    .subscribe((data:any) => {
      this.trabajoList = data;
    })
  }
  agregarEstudio(){
    this.router.navigate(['agregar-trabajo'])
  }
  modificar(id:number){
    this.router.navigate(['modificar-trabajo/', id]);
    console.log(id);
  }


  delete(id:number){
    if(confirm("Seguro quieres eliminar el estudio?")){
    this.trabajoService.eliminar(id).subscribe(()=>{
      console.log("Borrado!!");
      window.location.reload();
    },
    ()=>{
      console.log("No Borrado!!");
    })
    }
  }
}
