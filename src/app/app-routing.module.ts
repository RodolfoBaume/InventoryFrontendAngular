import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { ProductosComponent } from './business/productos/productos.component';
import { ProveedoresComponent } from './business/proveedores/proveedor-list/proveedores.component';
import { ReportesComponent } from './business/reportes/reportes.component';
import { UsuariosComponent } from './business/usuarios/usuarios.component';
import { ProveedorFormComponent } from './business/proveedores/proveedor-form/proveedor-form.component';
import { CategoriasListComponent } from './business/catalogos/categorias/categorias-list/categorias-list.component';
import { CategoriasFormComponent } from './business/catalogos/categorias/categorias-form/categorias-form.component';
import { UbicacionesListComponent } from './business/catalogos/ubicaciones/ubicaciones-list/ubicaciones-list.component';
import { UbicacionesFormComponent } from './business/catalogos/ubicaciones/ubicaciones-form/ubicaciones-form.component';
import { EstatusOrdenListComponent } from './business/catalogos/estatusOrden/estatus-orden-list/estatus-orden-list.component';
import { EstatusOrdenFormComponent } from './business/catalogos/estatusOrden/estatus-orden-form/estatus-orden-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'proveedores/create', component: ProveedorFormComponent },
  { path: 'proveedores/edit/:id', component: ProveedorFormComponent },
  { path: 'categorias', component: CategoriasListComponent},
  { path: 'categorias/create', component: CategoriasFormComponent},
  { path: 'categorias/edit/:id', component: CategoriasFormComponent},
  { path: 'ubicaciones', component: UbicacionesListComponent},
  { path: 'ubicaciones/create', component: UbicacionesFormComponent},
  { path: 'ubicaciones/edit/:id', component: UbicacionesFormComponent},
  { path: 'estatusOrdenes', component: EstatusOrdenListComponent },
  { path: 'estatusOrdenes/create', component: EstatusOrdenFormComponent},
  { path: 'estatusOrdenes/edit/:id', component: EstatusOrdenFormComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'usuarios', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
