import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil } from '../model/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) {}

  private perfilUrl = 'http://localhost:8080/rperfil';

  public getPerfiles() {
    return this.http.get<Perfil[]>(this.perfilUrl);
  }

  public getSugerencias(perfil:Perfil) {
    //return this.http.get(this.perfilUrl + "/sugerencias/"+ perfil.id);
    return this.http.get(this.perfilUrl + "/sugerencias/"+ 5);
  }
  

   //http://localhost:8080/user-portal/users/5
   public deleteUser(perfil:Perfil) {
    return this.http.delete(this.perfilUrl + "/"+ perfil.id);
  }

  public createUser(perfil:Perfil) {
    return this.http.post<Perfil>(this.perfilUrl, perfil);
  }

}
