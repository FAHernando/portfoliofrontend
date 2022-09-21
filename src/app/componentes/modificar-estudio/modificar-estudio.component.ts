import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estudio } from 'src/app/model/estudio';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-modificar-estudio',
  templateUrl: './modificar-estudio.component.html',
  styleUrls: ['./modificar-estudio.component.css']
})
export class ModificarEstudioComponent implements OnInit {

id:any;
datosEstudios!: Estudio;
  
  form: Educacion = new Educacion();
  formEstudio = new FormGroup({
    id: new FormControl(''),
    instituto: new FormControl(''),
    carrera: new FormControl(''),
    grado: new FormControl(''),
    comienzo: new FormControl(''),
    fin: new FormControl(''),
    web: new FormControl(''),
    imagen: new FormControl('')
  });
  
  constructor(private router: Router,
              private estudioService:EstudioService,
              private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    
    let estudioid = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.estudioService.getEstudio(`${estudioid}`).subscribe(data =>{
      console.log(data);
      this.datosEstudios=data;
      this.formEstudio.setValue({
        'id':  estudioid,
        'instituto': this.datosEstudios.instituto,
        'carrera':  this.datosEstudios.carrera,
        'grado':  this.datosEstudios.grado,
        'comienzo':  this.datosEstudios.comienzo,
        'fin':  this.datosEstudios.fin,
        'web':  this.datosEstudios.web,
        'imagen':  this.datosEstudios.imagen
      });
      
    });
    this.id=this.activatedRoute.snapshot.params['id'];
  }
  volver(){
    this.router.navigate(['main'])
  }
  
  postForm(form:Estudio, estudioid:number){
    if(confirm("Seguro quieres editar el estudio?")){
    this.estudioService.putEstudio(form, estudioid).subscribe((data) =>{
      console.log(data);
      console.log("Editado!!");
      this.router.navigate(['main'])
    },
    ()=>{
      console.log("No se pudo editar...");
    });
      console.log(form)
    }
  }
  
}


