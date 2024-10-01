import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstatusOrden } from '../models/estatusOrden.modelo';

@Injectable({
  providedIn: 'root'
})
export class EstatusOrdenService {

  private url = 'http://localhost:8080/api/estatusOrdenes';

  constructor(private http: HttpClient) { }

  getEstatusOrden(): Observable<EstatusOrden[]> {
    return this.http.get<EstatusOrden[]>(this.url);
  }

  getEstatusOrdenById(id: number): Observable<EstatusOrden> {
    return this.http.get<EstatusOrden>(`${this.url}/${id}`);
  }

  createEstatusOrden(estatusOrden: EstatusOrden): Observable<EstatusOrden> {
    return this.http.post<EstatusOrden>(this.url, estatusOrden);
  }

  updateEstatusOrden(id: number, estatusOrden: EstatusOrden): Observable<EstatusOrden> {
    return this.http.put<EstatusOrden>(`${this.url}/${id}`, estatusOrden);
  }

  deleteEstatusOrden(id: number): Observable<EstatusOrden> {
    return this.http.delete<EstatusOrden>(`${this.url}/${id}`);
  }
}
