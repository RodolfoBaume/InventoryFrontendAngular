import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstatusOrden } from '../models/estatusOrden.modelo';

@Injectable({
  providedIn: 'root'
})
export class EstatusOrdenService {

  private apiUrl = 'http://localhost:8080/api/estatusOrdenes';

  constructor(private http: HttpClient) { }

  getEstatusOrden(): Observable<EstatusOrden[]> {
    return this.http.get<EstatusOrden[]>(this.apiUrl);
  }

  getEstatusOrdenById(id: number): Observable<EstatusOrden> {
    return this.http.get<EstatusOrden>(`${this.apiUrl}/${id}`);
  }

  createEstatusOrden(estatusOrden: EstatusOrden): Observable<EstatusOrden> {
    return this.http.post<EstatusOrden>(this.apiUrl, estatusOrden);
  }

  updateEstatusOrden(id: number, estatusOrden: EstatusOrden): Observable<EstatusOrden> {
    return this.http.put<EstatusOrden>(`${this.apiUrl}/${id}`, estatusOrden);
  }

  deleteEstatusOrden(id: number): Observable<EstatusOrden> {
    return this.http.delete<EstatusOrden>(`${this.apiUrl}/${id}`);
  }
}
