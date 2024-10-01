import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../../../core/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../../../core/models/categoria.modelo';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrl: './categorias-form.component.css'
})
export class CategoriasFormComponent {
  categoriaForm!: FormGroup;
  isEdit: boolean = false;
  categoriaId!: number;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.initForm();
    this.checkIfEdit();
  }

  // Inicializa el formulario reactivo
  initForm(): void {
      this.categoriaForm = this.fb.group({
      nombreCategoria: ['', Validators.required],
      descripcionCategoria: ['', Validators.required]
    });
  }

  // Revisa si hay un parámetro de ID, indicando que es una edición
  checkIfEdit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.categoriaId = +id;
        this.categoriaService.getCategoriaById(this.categoriaId).subscribe((categoria: Categoria) => {
          this.categoriaForm.patchValue({
            nombreCategoria: categoria.nombreCategoria,
            descripcionCategoria: categoria.descripcionCategoria
          });
        });
      }
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Verificar si el formulario es válido
    if (this.categoriaForm.invalid) {
      return;  // Si el formulario no es válido, detener el envío
    }
  
    // Crear el objeto proveedor a partir del formulario
    const categoria: Categoria = {
      idCategoria: this.categoriaId ? this.categoriaId : 0,  // Si estamos editando, asignar el ID
      nombreCategoria: this.categoriaForm.value.nombreCategoria,
      descripcionCategoria: this.categoriaForm.value.descripcionCategoria
    };
  
    // Verificar si estamos en modo edición o creación
    if (this.isEdit) {
      // Modo edición: pasamos el ID como parámetro a updateCategoria
      this.categoriaService.updateCategoria(categoria.idCategoria, categoria).subscribe(
        (response) => {
          console.log('Categoria actualizada exitosamente:', response);
          this.router.navigate(['/categorias']);  // Redireccionar a la lista de categorias
        },
        (error) => {
          console.error('Error al actualizar la categoria:', error);
        }
      );
    } else {
      // Modo creación: creamos una nueva categoria
      this.categoriaService.createCategoria(categoria).subscribe(
        (response) => {
          console.log('Categoria creada exitosamente:', response);
          this.router.navigate(['/categorias']);  // Redireccionar a la lista de categorias
        },
        (error) => {
          console.error('Error al crear la categoria:', error);
        }
      );
    }
  }
}
