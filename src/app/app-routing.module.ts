
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoPrincipalComponent } from './cuerpo-principal/cuerpo-principal.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { EliminadosComponent } from './eliminados/eliminados.component';
import { LoginComponent } from './login/login.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [
  {
    path: 'navegacion',
    component: NavegacionComponent,
  },
  {
    path: 'cuerpo-principal',
    component: CuerpoPrincipalComponent,
  },
  {
    path: 'eliminados',
    component: EliminadosComponent,
  },
  {
    path: 'footer',
    component: EliminadosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'estudiante',
    component: EstudianteComponent,
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
