import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css']
})
export class ListaMensajesComponent implements OnInit {
  contactoList:any;
  constructor(private contacto:ContactoService,
              private router: Router) { }

  ngOnInit(): void {
    this.cargarMensajes();
  }
  cargarMensajes(): void {
    this.contacto.get(`http://localhost:8080/ver/mensajes`)
    .subscribe((data:any) => {
      this.contactoList = data;
    })
  }
  volver(){
    this.router.navigate(['main'])
  }
  eliminar(id:number){
    if(confirm("¿Seguro quieres eliminar el mensaje?")){
    this.contacto.delete(id).subscribe(()=>{
      console.log("Borrado!!");
      window.location.reload();
    },
    ()=>{
      console.log("No Borrado!!");
    })
    }
  }
}
