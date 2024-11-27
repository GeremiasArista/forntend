import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:3000/api/usuarios/';

  constructor(private http: HttpClient) { }


  fetchUser(){
    return this.http.get(this.URL);
  }

  postUser(user: any) {
    return this.http.post(this.URL, user);
  }

  updateUser(id_usuario: string, user: any) {
    return this.http.put(this.URL+'${id_usuario}',user); 
  }

  // Método DELETE para eliminar un usuario por su id_usuario (en la URL)
  deleteUser(id_usuario: string) {
    return this.http.delete(this.URL+'${id_usuario}'); 
  }
}
