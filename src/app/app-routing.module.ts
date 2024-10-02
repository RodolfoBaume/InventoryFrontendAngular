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
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'productos', component: ProductosComponent },
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [AuthGuard]  },
  { path: 'proveedores/create', component: ProveedorFormComponent, canActivate: [AuthGuard] },
  { path: 'proveedores/edit/:id', component: ProveedorFormComponent, canActivate: [AuthGuard] },
  { path: 'categorias', component: CategoriasListComponent, canActivate: [AuthGuard]},
  { path: 'categorias/create', component: CategoriasFormComponent, canActivate: [AuthGuard]},
  { path: 'categorias/edit/:id', component: CategoriasFormComponent, canActivate: [AuthGuard]},
  { path: 'ubicaciones', component: UbicacionesListComponent, canActivate: [AuthGuard]},
  { path: 'ubicaciones/create', component: UbicacionesFormComponent, canActivate: [AuthGuard]},
  { path: 'ubicaciones/edit/:id', component: UbicacionesFormComponent, canActivate: [AuthGuard]},
  { path: 'estatusOrdenes', component: EstatusOrdenListComponent , canActivate: [AuthGuard]},
  { path: 'estatusOrdenes/create', component: EstatusOrdenFormComponent, canActivate: [AuthGuard]},
  { path: 'estatusOrdenes/edit/:id', component: EstatusOrdenFormComponent , canActivate: [AuthGuard]},
  { path: 'reportes', component: ReportesComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
