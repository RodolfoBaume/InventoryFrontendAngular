import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../models/ubicacion.modelo';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private url = 'http://localhost:8080/api/ubicaciones';

  constructor(private http: HttpClient) { }

  getUbicaciones(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(this.url);
  }

  getUbicacionById(id: number): Observable<Ubicacion> {
    return this.http.get<Ubicacion>(`${this.url}/${id}`);
  }

  createUbicacion(ubicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.post<Ubicacion>(this.url, ubicacion);
  }

  updateUbicacion(id: number, ubicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.put<Ubicacion>(`${this.url}/${id}`, ubicacion);
  }

  deleteUbicacion(id: number): Observable<Ubicacion> {
    return this.http.delete<Ubicacion>(`${this.url}/${id}`);
  }
}
