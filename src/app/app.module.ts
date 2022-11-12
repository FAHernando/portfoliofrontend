import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PieComponent } from './componentes/pie/pie.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './componentes/logout/logout.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { ListaMensajesComponent } from './componentes/lista-mensajes/lista-mensajes.component';
import { AgregarEstudioComponent } from './componentes/agregar-estudio/agregar-estudio.component';
import { ModificarEstudioComponent } from './componentes/modificar-estudio/modificar-estudio.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { AgregarTrabajoComponent } from './componentes/agregar-trabajo/agregar-trabajo.component';
import { ModificarTrabajoComponent } from './componentes/modificar-trabajo/modificar-trabajo.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftSkillComponent } from './componentes/hard-soft-skill/hard-soft-skill.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EstudiosComponent,
    AcercaDeComponent,
    FormularioComponent,
    PieComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ListaMensajesComponent,
    AgregarEstudioComponent,
    ModificarEstudioComponent,
    ExperienciaLaboralComponent,
    AgregarTrabajoComponent,
    ModificarTrabajoComponent,
    HardSoftSkillComponent,
    InicioComponent,
    RegistrarseComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    ErrorTailorModule.forRoot({
      errors:{
        useValue:{
          required: 'campo requerido',
          minlength: ({requiredLength, actualLength}) =>
            'Expect ${requiredLength} but got ${actualLength}',
          invalidAddress: error => 'El correo no es válido'
        }
      }
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
