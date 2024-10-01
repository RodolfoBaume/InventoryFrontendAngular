import { Component } from '@angular/core';
import { Ubicacion } from '../../../../core/models/ubicacion.modelo';
import { UbicacionService } from '../../../../core/services/ubicacion.service';

@Component({
  selector: 'app-ubicaciones-list',
  templateUrl: './ubicaciones-list.component.html',
  styleUrl: './ubicaciones-list.component.css'
})
export class UbicacionesListComponent {
  ubicaciones: Ubicacion[] = [];

  constructor(private ubicacionService: UbicacionService
  ) { }

  ngOnInit(): void {
    this.ubicacionService.getUbicaciones().subscribe((data: Ubicacion[]) => {
      this.ubicaciones = data;
    });
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta ubicación?')) {
      this.ubicacionService.deleteUbicacion(id).subscribe(
        (response) => {
          console.log('Ubicación eliminada exitosamente');
          // Filtrar la lista de proveedores en el componente
          this.ubicaciones = this.ubicaciones.filter(ubicacion => ubicacion.idUbicacion !== id);
        },
        (error) => {
          console.error('Error al eliminar la ubicación:', error);
        }
      );
    }
  }
}
