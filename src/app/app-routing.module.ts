import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MainComponent } from './componentes/main/main.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ListaMensajesComponent } from './componentes/lista-mensajes/lista-mensajes.component';
import { AgregarEstudioComponent } from './componentes/agregar-estudio/agregar-estudio.component';
import { ModificarEstudioComponent } from './componentes/modificar-estudio/modificar-estudio.component';
import { AgregarTrabajoComponent } from './componentes/agregar-trabajo/agregar-trabajo.component';
import { ModificarTrabajoComponent } from './componentes/modificar-trabajo/modificar-trabajo.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';


const routes: Routes = [
{ path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'lista-mensajes', component: ListaMensajesComponent},
  { path: 'agregar-estudio', component: AgregarEstudioComponent},
  { path: 'modificar-estudio/:id', component: ModificarEstudioComponent},
  { path: 'agregar-trabajo', component: AgregarTrabajoComponent},
  { path: 'modificar-trabajo/:id', component: ModificarTrabajoComponent},
  { path: 'experiencia-laboral', component: ExperienciaLaboralComponent},
  { path: 'estudios', component: EstudiosComponent},
  { path: 'contacto', component: FormularioComponent},
  { path: 'acerca', component: AcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{useHash:true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
