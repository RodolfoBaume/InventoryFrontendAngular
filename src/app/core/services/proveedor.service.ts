import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private url = 'http://localhost:8080/api/proveedores';

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }

  getProveedorById(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.url}/${id}`);
  }

  createProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.url, proveedor);
  }

  updateProveedor(id: number, proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.url}/${id}`, proveedor);
  }

  deleteProveedor(id: number): Observable<Proveedor> {
    return this.http.delete<Proveedor>(`${this.url}/${id}`);
  }
  
}
