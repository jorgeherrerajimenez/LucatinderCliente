import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';
import { Perfil } from '../../model/perfil';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfilService.getContactos(11);
    console.log(this.perfilService.getContactos(11))
  }

}
