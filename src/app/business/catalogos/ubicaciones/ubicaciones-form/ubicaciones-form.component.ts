import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UbicacionService } from '../../../../core/services/ubicacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ubicacion } from '../../../../core/models/ubicacion.modelo';

@Component({
  selector: 'app-ubicaciones-form',
  templateUrl: './ubicaciones-form.component.html',
  styleUrl: './ubicaciones-form.component.css',
})
export class UbicacionesFormComponent {
  ubicacionForm!: FormGroup;
  isEdit: boolean = false;
  ubicacionId!: number;

  constructor(
    private fb: FormBuilder,
    private ubicacionService: UbicacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.checkIfEdit();
  }

  // Inicializa el formulario reactivo
  initForm(): void {
    this.ubicacionForm = this.fb.group({
      nombreUbicacion: ['', Validators.required],
      direccionUbicacion: ['', Validators.required],
    });
  }

  // Revisa si hay un parámetro de ID, indicando que es una edición
  checkIfEdit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.ubicacionId = +id;
        this.ubicacionService
          .getUbicacionById(this.ubicacionId)
          .subscribe((ubicacion: Ubicacion) => {
            this.ubicacionForm.patchValue({
              nombreUbicacion: ubicacion.nombreUbicacion,
              direccionUbicacion: ubicacion.direccionUbicacion
            });
          });
      }
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Verificar si el formulario es válido
    if (this.ubicacionForm.invalid) {
      return; // Si el formulario no es válido, detener el envío
    }

    // Crear el objeto proveedor a partir del formulario
    const ubicacion: Ubicacion = {
      idUbicacion: this.ubicacionId ? this.ubicacionId : 0, // Si estamos editando, asignar el ID
      nombreUbicacion: this.ubicacionForm.value.nombreUbicacion,
      direccionUbicacion: this.ubicacionForm.value.direccionUbicacion
    };

    // Verificar si estamos en modo edición o creación
    if (this.isEdit) {
      // Modo edición: pasamos el ID como parámetro a updateCategoria
      this.ubicacionService
        .updateUbicacion(ubicacion.idUbicacion,ubicacion)
        .subscribe(
          (response) => {
            console.log('Ubicación actualizada exitosamente:', response);
            this.router.navigate(['/ubicaciones']); // Redireccionar a la lista de categorias
          },
          (error) => {
            console.error('Error al actualizar la ubicacion:', error);
          }
        );
    } else {
      // Modo creación: creamos una nueva categoria
      this.ubicacionService.createUbicacion(ubicacion).subscribe(
        (response) => {
          console.log('Ubicacion creada exitosamente:', response);
          this.router.navigate(['/ubicaciones']); // Redireccionar a la lista de categorias
        },
        (error) => {
          console.error('Error al crear la ubicacion:', error);
        }
      );
    }
  }
}
