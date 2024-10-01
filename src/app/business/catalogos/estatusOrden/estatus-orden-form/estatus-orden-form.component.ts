import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstatusOrdenService } from '../../../../core/services/estatus-orden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstatusOrden } from '../../../../core/models/estatusOrden.modelo';

@Component({
  selector: 'app-estatus-orden-form',
  templateUrl: './estatus-orden-form.component.html',
  styleUrl: './estatus-orden-form.component.css'
})
export class EstatusOrdenFormComponent {

  estatusOrdenForm!: FormGroup;
  isEdit: boolean = false;
  estatusOrdenId!: number;

  constructor(
    private fb: FormBuilder,
    private estatusOrdenService: EstatusOrdenService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.checkIfEdit();
  }

  // Inicializa el formulario reactivo
  initForm(): void {
    this.estatusOrdenForm = this.fb.group({
      estatusOrden: ['', Validators.required]
    });
  }

  // Revisa si hay un parámetro de ID, indicando que es una edición
  checkIfEdit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.estatusOrdenId = +id;
        this.estatusOrdenService
          .getEstatusOrdenById(this.estatusOrdenId)
          .subscribe((estatusOrden: EstatusOrden) => {
            this.estatusOrdenForm.patchValue({
              estatusOrden: estatusOrden.estatusOrden
            });
          });
      }
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Verificar si el formulario es válido
    if (this.estatusOrdenForm.invalid) {
      return; // Si el formulario no es válido, detener el envío
    }

    // Crear el objeto proveedor a partir del formulario
    const estatusOrden: EstatusOrden = {
      idEstatusOrden: this.estatusOrdenId ? this.estatusOrdenId : 0, // Si estamos editando, asignar el ID
      estatusOrden: this.estatusOrdenForm.value.estatusOrden,
    };

    // Verificar si estamos en modo edición o creación
    if (this.isEdit) {
      // Modo edición: pasamos el ID como parámetro a update
      this.estatusOrdenService
        .updateEstatusOrden(estatusOrden.idEstatusOrden, estatusOrden)
        .subscribe(
          (response) => {
            console.log('Estatus de la Orden de Compra actualizado exitosamente:', response);
            this.router.navigate(['/estatusOrdenes']); // Redireccionar a la lista de categorias
          },
          (error) => {
            console.error('Error al actualizar El Estaus de la Orden de Compra:', error);
          }
        );
    } else {
      // Modo creación: creamos uno nuevo 
      this.estatusOrdenService.createEstatusOrden(estatusOrden).subscribe(
        (response) => {
          console.log('Estatus de la Orden de Compra creada exitosamente:', response);
          this.router.navigate(['/estatusOrdenes']); // Redireccionar a la lista 
        },
        (error) => {
          console.error('Error al crear el Estatus de la Orden de Compra:', error);
        }
      );
    }
  }
}
