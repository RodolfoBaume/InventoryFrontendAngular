import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getRole();

    if (this.authService.isAuthenticated() && userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
