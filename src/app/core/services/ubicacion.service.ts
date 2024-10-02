import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../models/ubicacion.modelo';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl = 'http://localhost:8080/api/ubicaciones';

  constructor(private http: HttpClient) { }

  getUbicaciones(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(this.apiUrl);
  }

  getUbicacionById(id: number): Observable<Ubicacion> {
    return this.http.get<Ubicacion>(`${this.apiUrl}/${id}`);
  }

  createUbicacion(ubicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.post<Ubicacion>(this.apiUrl, ubicacion);
  }

  updateUbicacion(id: number, ubicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.put<Ubicacion>(`${this.apiUrl}/${id}`, ubicacion);
  }

  deleteUbicacion(id: number): Observable<Ubicacion> {
    return this.http.delete<Ubicacion>(`${this.apiUrl}/${id}`);
  }
}
