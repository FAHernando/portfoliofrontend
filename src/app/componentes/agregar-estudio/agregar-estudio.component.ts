import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Estudio } from 'src/app/model/estudio';

@Component({
  selector: 'app-agregar-estudio',
  templateUrl: './agregar-estudio.component.html',
  styleUrls: ['./agregar-estudio.component.css']
})
export class AgregarEstudioComponent implements OnInit {
  respuesta:any=[];
  comentarios:any=[];

  formEstudio = new FormGroup({
    instituto: new FormControl(''),
    carrera: new FormControl(''),
    grado: new FormControl(''),
    comienzo: new FormControl(''),
    fin: new FormControl(''),
    web: new FormControl(''),
    imagen: new FormControl(''),
  });
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private estudios:EstudioService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.formEstudio = this.formBuilder.group({

      instituto:[''],
      carrera:[''],
      grado:[''],
      comienzo: [''],
      fin: [''],
      web: [''],
      imagen: ['']         
  
    })
  }
  volver(){
    this.router.navigate(['main'])
  }
  public enviarData(){
    this.estudios.post('https://heroku-argentinaprograma.herokuapp.com/new/estudio',
    { 
      instituto:this.formEstudio.value.instituto,
      carrera:this.formEstudio.value.carrera,
      grado:this.formEstudio.value.grado,
      comienzo:this.formEstudio.value.comienzo,
      fin:this.formEstudio.value.fin,
      web:this.formEstudio.value.web,
      imagen:this.formEstudio.value.imagen
    }
    )
    .subscribe(respuesta => {
      console.log('Nuevo Estudio Guardado');
      this.formEstudio.reset();
      this.router.navigate(['main']);
    });
  }
  
  
}
