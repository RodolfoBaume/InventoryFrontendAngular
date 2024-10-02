import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login2(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Guardamos el token en el localStorage
        this.setToken(response.accessToken);

        // Cambiamos el valor de currentUserLoginOn a true
        this.currentUserLoginOn.next(true);

        // Simulamos obtener los datos del usuario a partir del token (puedes mejorarlo usando la API)
        const userData = this.decodeToken(response.accessToken);
        this.currentUserData.next(userData);
      })
    );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    // Cuando el usuario se desloguea, reiniciamos las variables
    localStorage.removeItem('token');
    this.currentUserLoginOn.next(false);
    this.currentUserData.next(null);
  }

  getRole(): string | null {
    // Aquí puedes decodificar el token JWT para obtener el rol del usuario
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    }
    return null;
  }

  // Decodificamos el token para obtener los datos del usuario (como el rol, email, etc.)
  private decodeToken(token: string): any {
    const payload = atob(token.split('.')[1]);
    return JSON.parse(payload);
  }

  get userData(): Observable<any>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

}
