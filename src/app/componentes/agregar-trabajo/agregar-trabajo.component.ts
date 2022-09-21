import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajoService } from 'src/app/servicios/trabajo.service';

@Component({
  selector: 'app-agregar-trabajo',
  templateUrl: './agregar-trabajo.component.html',
  styleUrls: ['./agregar-trabajo.component.css']
})
export class AgregarTrabajoComponent implements OnInit {
  respuesta:any=[];
  comentarios:any=[];

  formTrabajo = new FormGroup({
    empresa: new FormControl(''),
    puesto: new FormControl(''),
    descripcion: new FormControl(''),
    comienzo: new FormControl(''),
    fin: new FormControl(''),
    web: new FormControl(''),
    imagen: new FormControl(''),
  });
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private trabajoService:TrabajoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formTrabajo = this.formBuilder.group({

      empresa:[''],
      puesto:[''],
      descripcion:[''],
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
    this.trabajoService.post('https://portfoliobackendweb.herokuapp.com/crear/trabajo',
    { 
      empresa:this.formTrabajo.value.empresa,
      puesto:this.formTrabajo.value.puesto,
      descripcion:this.formTrabajo.value.descripcion,
      comienzo:this.formTrabajo.value.comienzo,
      fin:this.formTrabajo.value.fin,
      web:this.formTrabajo.value.web,
      imagen:this.formTrabajo.value.imagen
    }
    )
    .subscribe(respuesta => {
      console.log('Nuevo Trabajo Guardado');
      this.formTrabajo.reset();
      this.router.navigate(['main']);
    });
  }
  
  
}
