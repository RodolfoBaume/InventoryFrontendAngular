import { Component } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalProveedores: number = 0;
  totalUbicaciones: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadTotales();
  }

  loadTotales(): void {
    this.dashboardService.getTotales().subscribe(
      (data) => {
        this.totalProveedores = data.totalProveedores;
        this.totalUbicaciones = data.totalUbicaciones;
      },
      (error) => {
        console.error('Error al cargar los totales:', error);
      }
    );
  }
}
