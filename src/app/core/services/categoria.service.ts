import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.modelo';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}/${id}`);
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }

  updateCategoria(id: number, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.url}/${id}`, categoria);
  }

  deleteCategoria(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.url}/${id}`);
  }
}
