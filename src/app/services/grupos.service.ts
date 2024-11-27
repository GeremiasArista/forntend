import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  URL = 'https://backend-rzrw.onrender.com/api/grupos/'; // URL base para grupos

  constructor(private http: HttpClient) { }

  fetchGrupos(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  postGrupo(grupo: any): Observable<any> {
    return this.http.post<any>(this.URL, grupo);
  }

  updateGrupo(id_grupo: string, grupo: any): Observable<any> {
    return this.http.put<any>(`${this.URL}${id_grupo}`, grupo);
  }

  deleteGrupo(id_grupo: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}${id_grupo}`);
  }
}
