import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from '../../services/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  perfil: Perfil = new Perfil();

  constructor(private perfilService: PerfilService,
              private router: Router
              ) { }


  createPerfil() {
    this.perfilService.createPerfil(this.perfil)
    .subscribe(data=> {alert("Usuario generado de forma correcta");})
  };


  ngOnInit(): void {

   
  }

}
