import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  respuesta:any=[];
  comentarios:any=[];
  formContacto = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    mensaje: new FormControl(''),
  });

  constructor(private contacto:ContactoService,
              private formBuilder: FormBuilder,
              private router: Router) {
                
  /*this.formContacto = new FormGroup({
    nombre: new FormControl('nombre'), 
    email: new FormControl(),
    telefono: new FormControl(),
    mensaje: new FormControl()
  }),*/
  /*this.formContacto = this.formBuilder.group({

    nombre:[''],
    email:[''],
    telefono:[''],
    mensaje: ['']   

  });*/
  
  }

  ngOnInit(): void {
    this.formContacto = this.formBuilder.group({

      nombre:[''],
      email:[''],
      telefono:[''],
      mensaje: ['']   
  
    })
  }
  public enviarData(){
    this.contacto.post('http://localhost:8080/nuevo/mensaje',
    { 
      nombre:this.formContacto.value.nombre,
      email:this.formContacto.value.email,
      telefono:this.formContacto.value.telefono,
      mensaje:this.formContacto.value.mensaje
    }
    )
    .subscribe(respuesta => {
      console.log('Comentario enviado!!');
      this.formContacto.reset();
    });
  }
  mensajes(){
    this.router.navigate(['lista-mensajes'])
  }
}
