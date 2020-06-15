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
  
  public getSugerencias(perfil:Perfil) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/sugerencias/" + perfil.id);
  }

  public getContactos(id:Number) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaContactos/" + id);
  }

  public getDescartes(id:Number) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaDescartes/" + id);
  }
  public getMatches(id:Number) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaMatches/" + id);
  }

   //http://localhost:8080/user-portal/users/5
   public deletePerfil(perfil:Perfil) {

    return this.http.delete(this.perfilUrl + "/"+ perfil.id);
  }

  public createPerfil(perfil:Perfil) {
    return this.http.post<Perfil>(this.perfilUrl , perfil.id);
  }

  public findByUsername(username:String){
    return this.http.get<Perfil>(this.perfilUrl + "/" + username);
  }

  public descartarSugerencia(idPropietario:Number, idSugerencia:Number) {
    return this.http.post<Perfil>(this.perfilUrl + "/descartarSugerencia/" +idPropietario, new Perfil(idSugerencia,"---","-",0,""));
  }

}
