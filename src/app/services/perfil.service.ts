import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perfil } from '../model/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) {}

  private perfilUrl = 'http://localhost:8080/rperfil';
  

  public getSugerencias(perfil:Perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/sugerencias/" + perfil.id);
  }

  public getContactos(perfil:Perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaContactos/" + perfil.id);
  }

  public getDescartes(perfil:Perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaDescartes/" + perfil.id);
  }

  public getMatches(perfil:Perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaMatches/" + perfil.id);
  }


   //http://localhost:8080/user-portal/users/5
   public deleteUser(perfil:Perfil) {
    return this.http.delete(this.perfilUrl + "/"+ perfil.id);
  }

  public createUser(perfil:Perfil) {
    return this.http.post<Perfil>(this.perfilUrl, perfil);
  }

}
