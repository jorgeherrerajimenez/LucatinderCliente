import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PerfilService  } from "../../services/perfil.service";
import { Perfil } from '../../model/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css'],
  providers: [PerfilService]
})

export class SugerenciasComponent implements OnInit {
  
  sugerencias:Perfil[];
  perfil: Perfil;

  constructor(private router: Router,private perfilService: PerfilService) { }
  
  
  ngOnInit(): void {
    this.perfilService. getSugerencias(14).
    subscribe(data => {
      this.sugerencias = data;
      console.log(this.sugerencias)
  });

}

}




  