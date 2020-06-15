import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';
import { Perfil } from '../../model/perfil';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:String;

  constructor(private perfilService: PerfilService, 
            private router:Router,
            private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.perfilService.getContactos(11);
    console.log(this.perfilService.getContactos(11))
  }

  onSubmit(): void {
    console.log(this.userName);
    this.perfilService.findByUsername(this.userName).subscribe(result => this.goToDescartes(+result.id));
  }

  goToDescartes(id:Number): void {
    console.log(id)
    this.router.navigate(['/home',id]);
  }

}
