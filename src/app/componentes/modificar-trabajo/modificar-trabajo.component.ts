import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrabajoService } from 'src/app/servicios/trabajo.service';
import { HttpClient } from '@angular/common/http';
import { Trabajo } from 'src/app/model/trabajo';
import { trabajoClase } from 'src/app/model/trabajoClase';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-trabajo',
  templateUrl: './modificar-trabajo.component.html',
  styleUrls: ['./modificar-trabajo.component.css']
})
export class ModificarTrabajoComponent implements OnInit {
  id:any;
  datosTrabajo!: Trabajo;
    
    form: trabajoClase = new trabajoClase();
    formTrabajo = new FormGroup({
      id: new FormControl(''),
      empresa: new FormControl(''),
      puesto: new FormControl(''),
      descripcion: new FormControl(''),
      comienzo: new FormControl(''),
      fin: new FormControl(''),
      web: new FormControl(''),
      imagen: new FormControl('')
    });
  constructor(private http:HttpClient,
              private trabajoService: TrabajoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let trabajoid = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.trabajoService.getTrabajo(`${trabajoid}`).subscribe(data =>{
      console.log(data);
      this.datosTrabajo=data;
      this.formTrabajo.setValue({
        'id':  trabajoid,
        'empresa': this.datosTrabajo.empresa,
        'puesto':  this.datosTrabajo.puesto,
        'descripcion':  this.datosTrabajo.descripcion,
        'comienzo':  this.datosTrabajo.comienzo,
        'fin':  this.datosTrabajo.fin,
        'web':  this.datosTrabajo.web,
        'imagen':  this.datosTrabajo.imagen
      });
      
    });
    this.id=this.activatedRoute.snapshot.params['id'];
  }
  volver(){
    this.router.navigate(['main'])
  }
  
  postForm(form:Trabajo, trabajoid:number){
    if(confirm("Seguro lo quieres editar?")){
    this.trabajoService.putTrabajo(form, trabajoid).subscribe((data) =>{
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
