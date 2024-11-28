import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  URL = 'http://localhost:3000/api/grupos/'; // URL base para grupos

  constructor(private http: HttpClient) { }

  fetchGrupos(): Observable<any[]> {
    return this.http.get<any>(this.URL).pipe(
      map((response: any) => {
        // Verificar que 'response.data' sea un array
        if (Array.isArray(response.data)) {
          return response.data;  // Si 'data' es un array, devolverlo
        } else {
          console.log(response.message);  // Si no es un array, mostrar el mensaje
          return [];  // Devolver un array vacío
        }
      }),
      catchError(error => {
        console.error('Error al obtener los grupos:', error);
        return of([]);  // En caso de error, devolver un array vacío
      })
    );
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
