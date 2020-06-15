import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/services/perfil.service';
//Nuevo
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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
    this.perfilService.getSugerencias(5)
      .subscribe(params => data => {
        this.sugerencias = data;
        console.log(this.sugerencias);
      });
  };

}




  