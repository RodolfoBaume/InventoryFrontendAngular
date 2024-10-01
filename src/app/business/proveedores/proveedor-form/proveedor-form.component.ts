import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from '../../../core/services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../../core/models/proveedor.modelo';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrl: './proveedor-form.component.css'
})
export class ProveedorFormComponent implements OnInit{

  proveedorForm!: FormGroup;
  isEdit: boolean = false;
  proveedorId!: number;

  constructor(
    private fb: FormBuilder,
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.initForm();
    this.checkIfEdit();
  }

  // Inicializa el formulario reactivo
  initForm(): void {
      this.proveedorForm = this.fb.group({
      nombreProveedor: ['', Validators.required],
      direccionProveedor: ['', Validators.required],
      telefonoProveedor: ['', Validators.required],
      emailProveedor: ['', [Validators.required, Validators.email]]
    });
  }

  // Revisa si hay un parámetro de ID, indicando que es una edición
  checkIfEdit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.proveedorId = +id;
        this.proveedorService.getProveedorById(this.proveedorId).subscribe((proveedor: Proveedor) => {
          this.proveedorForm.patchValue({
            nombreProveedor: proveedor.nombreProveedor,
            direccionProveedor: proveedor.direccionProveedor,
            telefonoProveedor: proveedor.telefonoProveedor,
            emailProveedor: proveedor.emailProveedor
          });
        });
      }
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Verificar si el formulario es válido
    if (this.proveedorForm.invalid) {
      return;  // Si el formulario no es válido, detener el envío
    }
  
    // Crear el objeto proveedor a partir del formulario
    const proveedor: Proveedor = {
      idProveedor: this.proveedorId ? this.proveedorId : 0,  // Si estamos editando, asignar el ID
      nombreProveedor: this.proveedorForm.value.nombreProveedor,
      direccionProveedor: this.proveedorForm.value.direccionProveedor,
      telefonoProveedor: this.proveedorForm.value.telefonoProveedor,
      emailProveedor: this.proveedorForm.value.emailProveedor
    };
  
    // Verificar si estamos en modo edición o creación
    if (this.isEdit) {
      // Modo edición: pasamos el ID como parámetro a updateProveedor
      this.proveedorService.updateProveedor(proveedor.idProveedor, proveedor).subscribe(
        (response) => {
          console.log('Proveedor actualizado exitosamente:', response);
          this.router.navigate(['/proveedores']);  // Redireccionar a la lista de proveedores
        },
        (error) => {
          console.error('Error al actualizar el proveedor:', error);
        }
      );
    } else {
      // Modo creación: creamos un nuevo proveedor
      this.proveedorService.createProveedor(proveedor).subscribe(
        (response) => {
          console.log('Proveedor creado exitosamente:', response);
          this.router.navigate(['/proveedores']);  // Redireccionar a la lista de proveedores
        },
        (error) => {
          console.error('Error al crear el proveedor:', error);
        }
      );
    }
  }
  
}  