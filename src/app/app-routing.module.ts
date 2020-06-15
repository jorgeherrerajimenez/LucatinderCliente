import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Importamos los componentes
import {LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import {HomeComponent} from './components/home/home.component';
import {SugerenciasComponent} from './components/sugerencias/sugerencias.component';
import {ContactosComponent} from './components/contactos/contactos.component';
import {DescartesComponent} from './components/descartes/descartes.component';
import {MatchsComponent} from './components/matchs/matchs.component';


const routes: Routes = [
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full' 
},

{
  path: 'login',
  component: LoginComponent
},

{
  path: 'registro',
  component:RegistroComponent
},
 
{path: 'home',
  component:HomeComponent},

{
  path: 'sugerencias',
  component:SugerenciasComponent
},

{
  path: 'contactos',
  component: ContactosComponent,
  pathMatch: 'full'
},

{
  path:'descartes',
  component: DescartesComponent
},

{
  path: 'matchs',
  component: MatchsComponent
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
