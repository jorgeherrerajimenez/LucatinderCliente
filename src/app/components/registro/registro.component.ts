import { Component, OnInit, ValueProvider } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from '../../services/perfil.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

angForm: FormGroup;
perfil: Perfil = new Perfil();

constructor(private fb: FormBuilder,
            private perfilService: PerfilService,
            private router: Router) { 
              
              this.createForm(this.perfil);
           }

ngOnInit(): void {}

gotoLogin() {
this.router.navigate(['/login']);
}

createForm(perfil: Perfil){

    this.angForm = this.fb.group({
      nombre: [this.perfil.nombre, [Validators.required, Validators.minLength(3)]],
      genero: [this.perfil.genero, Validators.required],
      edad: [this.perfil.edad, [Validators.required, Validators.min(18)]],
      usuario: [this.perfil.username, [Validators.required, Validators.minLength(3)]],
      password:[this.perfil.password, Validators.required],
      descripcion:[this.perfil.descripcion]
    });
  }

              
createPerfil() {
this.perfilService.createPerfil(this.perfil)
.subscribe(data=> {alert("Usuario generado de forma correcta");}, result=> this.gotoLogin())
}
              
}



