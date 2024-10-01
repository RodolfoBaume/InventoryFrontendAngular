import { Component } from '@angular/core';
import { Proveedor } from '../../../core/models/proveedor.modelo';
import { ProveedorService } from '../../../core/services/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {
  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe((data: Proveedor[]) => {
      this.proveedores = data;
    });
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
      this.proveedorService.deleteProveedor(id).subscribe(
        (response) => {
          console.log('Proveedor eliminado exitosamente');
          // Filtrar la lista de proveedores en el componente
          this.proveedores = this.proveedores.filter(proveedor => proveedor.idProveedor !== id);
        },
        (error) => {
          console.error('Error al eliminar el proveedor:', error);
        }
      );
    }
  }
  
  
}
