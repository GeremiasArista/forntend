import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:3000/api/usuarios/';

  constructor(private http: HttpClient) { }

  fetchUser(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  postUser(user: any): Observable<any> {
    return this.http.post<any>(this.URL, user);
  }

  updateUser(id_original: string, usuario: any) {
    return this.http.put(`${this.URL}${id_original}`, usuario);
  }

  deleteUser(id_usuario: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}${id_usuario}`);
  }
}
