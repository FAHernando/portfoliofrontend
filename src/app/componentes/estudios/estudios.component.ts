
import { Component, OnInit } from '@angular/core';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  educacionList:any
  
  constructor(private datosPortfolio:PortfolioAlexisService,
              private estudios:EstudioService,
              private router: Router) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educacionList=data.education;
    })
    this.cargarData();
  }
  cargarData(): void {
    this.estudios.get(`http://localhost:8080/ver/estudios`)
    .subscribe((data:any) => {
      this.educacionList = data;
    })
  }
  agregarEstudio(){
    this.router.navigate(['agregar-estudio'])
  }
  modificar(id:number){
    this.router.navigate(['modificar-estudio/', id]);
    console.log(id);
  }

  delete(id:number){
    if(confirm("Seguro quieres eliminar el estudio?")){
    this.estudios.eliminar(id).subscribe(()=>{
      console.log("Borrado!!");
      window.location.reload();
    },
    ()=>{
      console.log("No Borrado!!");
    })
    }
  }
  
  
}
