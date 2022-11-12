import { Component, OnInit } from '@angular/core';
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'
import { Router } from '@angular/router';
import { TrabajoService } from 'src/app/servicios/trabajo.service';
import { HttpClient } from '@angular/common/http';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  educacionList:any;
  trabajoList:any;
  formContacto = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    mensaje: new FormControl(''),
  });
  constructor(private datosPortfolio:PortfolioAlexisService,
              private router: Router,
              private http:HttpClient,
              private trabajoService: TrabajoService,
              private estudios:EstudioService,
              
              private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educacionList=data.education;
      this.trabajoList=data.education;
    })
    this.cargarData();
    this.cargarData2();
    this.formContacto = this.formBuilder.group({

      nombre:[''],
      email:[''],
      telefono:[''],
      mensaje: ['']   
  
    })
  }
  cargarData(): void {
    this.trabajoService.get(`http://localhost:8080/ver/trabajos`)
    .subscribe((data:any) => {
      this.trabajoList = data;
    })
  }
  cargarData2(): void {
    this.estudios.get(`http://localhost:8080/ver/estudios`)
    .subscribe((data:any) => {
      this.educacionList = data;
    })
  }
  
  enviar(){
    if(confirm("Debes Registrarte para poder enviar un mensaje!!")){
      console.log("Alerta!!");
    }}
    

}
