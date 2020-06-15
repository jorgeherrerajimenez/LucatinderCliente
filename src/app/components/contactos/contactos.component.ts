import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PerfilService  } from "../../services/perfil.service";
import { Perfil } from '../../model/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  providers: [PerfilService]
})

export class ContactosComponent implements OnInit {

  contactos: Perfil[];
  perfil : Perfil;

  constructor(private router: Router, private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfilService. getContactos(5).
    subscribe(data => {
      this.contactos = data;
      console.log(this.contactos)
  });

}

}