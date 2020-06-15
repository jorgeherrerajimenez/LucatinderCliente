import { Component, OnInit } from '@angular/core';

import { PerfilService  } from "../../services/perfil.service";
import { Perfil } from '../../model/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css'],
  providers: [PerfilService]
})
export class MatchsComponent implements OnInit {

  matches: Perfil[];
  perfil : Perfil;

  constructor(private router: Router, private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfilService. getContactos(7).
    subscribe(data => {
      this.matches = data;
      console.log(this.matches)
  });

}
}