import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/services/perfil.service';
import { HttpClientModule} from "@angular/common/http";
//Nuevo
import { Router } from '@angular/router';



@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  
  sugerencias:Perfil[];
  perfil: Perfil;

  constructor(private router: Router,private perfilService: PerfilService) { }
  
  
  ngOnInit(): void {
    this.perfilService.getSugerencias(this.perfil)

      .subscribe(params => data => {
        this.sugerencias = data;
      });
  };

}




  