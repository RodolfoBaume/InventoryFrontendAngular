import { Component } from '@angular/core';
import { EstatusOrden } from '../../../../core/models/estatusOrden.modelo';
import { EstatusOrdenService } from '../../../../core/services/estatus-orden.service';

@Component({
  selector: 'app-estatus-orden-list',
  templateUrl: './estatus-orden-list.component.html',
  styleUrl: './estatus-orden-list.component.css'
})
export class EstatusOrdenListComponent {
  estatusOrdenes: EstatusOrden[] = [];

  constructor(private estatusOrdenService: EstatusOrdenService
  ) { }

  ngOnInit(): void {
    this.estatusOrdenService.getEstatusOrden().subscribe((data: EstatusOrden[]) => {
      this.estatusOrdenes = data;
    });
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este Estatus?')) {
      this.estatusOrdenService.deleteEstatusOrden(id).subscribe(
        (response) => {
          console.log('Estatus eliminado exitosamente');
          // Filtrar la lista de proveedores en el componente
          this.estatusOrdenes = this.estatusOrdenes.filter(estatusOrden => estatusOrden.idEstatusOrden !== id);
        },
        (error) => {
          console.error('Error al eliminar el Estatus:', error);
        }
      );
    }
  }
}
