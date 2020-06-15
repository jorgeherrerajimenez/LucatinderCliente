import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Perfil } from '../model/perfil';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  constructor(private http:HttpClient) {}

  private perfilUrl = 'http://localhost:8080/rperfil';
  
  public getSugerencias(id:any) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/sugerencias/" + id);
  }

  public getContactos(id:any) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaContactos/" + id);
  }

  public getDescartes(perfil:Perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaDescartes/" + perfil.id);
  }
  public getMatches(perfil:Perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaMatches/" + perfil.id);
  }

   //http://localhost:8080/user-portal/users/5
   public deletePerfil(perfil:Perfil) {

    return this.http.delete(this.perfilUrl + "/"+ perfil.id);
  }

  public createPerfil(perfil:Perfil) {
    return this.http.post<Perfil>(this.perfilUrl , perfil.id);
  }

}
