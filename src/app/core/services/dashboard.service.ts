import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/api/dashboard/totales';

  constructor(private http: HttpClient) { }

  getTotales(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
