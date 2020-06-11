import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public url:string = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    return this.http.post(this.url, {
      username: username,
      password: password     
    });     
  }
}
