import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { DescartesComponent } from './components/descartes/descartes.component';
import { MatchsComponent } from './components/matchs/matchs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    SugerenciasComponent,
    ContactosComponent,
    DescartesComponent,
    MatchsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
