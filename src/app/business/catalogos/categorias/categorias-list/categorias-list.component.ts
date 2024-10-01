import { Component } from '@angular/core';
import { CategoriaService } from '../../../../core/services/categoria.service';
import { Categoria } from '../../../../core/models/categoria.modelo';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.css'
})
export class CategoriasListComponent {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe((data: Categoria[]) => {
      this.categorias = data;
    });
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este Categoria?')) {
      this.categoriaService.deleteCategoria(id).subscribe(
        (response) => {
          console.log('Categoria eliminada exitosamente');
          // Filtrar la lista de proveedores en el componente
          this.categorias = this.categorias.filter(categoria => categoria.idCategoria !== id);

        },
        (error) => {
          console.error('Error al eliminar la Categoria:', error);
        }
      );
    }
  }
}
