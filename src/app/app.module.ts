import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { ReportesComponent } from './business/reportes/reportes.component';
import { ProductosComponent } from './business/productos/productos.component';
import { UsuariosComponent } from './business/usuarios/usuarios.component';
import { ProveedoresComponent } from './business/proveedores/proveedor-list/proveedores.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorFormComponent } from './business/proveedores/proveedor-form/proveedor-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasFormComponent } from './business/catalogos/categorias/categorias-form/categorias-form.component';
import { CategoriasListComponent } from './business/catalogos/categorias/categorias-list/categorias-list.component';
import { UbicacionesListComponent } from './business/catalogos/ubicaciones/ubicaciones-list/ubicaciones-list.component';
import { UbicacionesFormComponent } from './business/catalogos/ubicaciones/ubicaciones-form/ubicaciones-form.component';
import { EstatusOrdenListComponent } from './business/catalogos/estatusOrden/estatus-orden-list/estatus-orden-list.component';
import { EstatusOrdenFormComponent } from './business/catalogos/estatusOrden/estatus-orden-form/estatus-orden-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ReportesComponent,
    ProductosComponent,
    UsuariosComponent,
    ProveedoresComponent,
    LayoutComponent,
    ProveedorFormComponent,
    CategoriasFormComponent,
    CategoriasListComponent,
    UbicacionesListComponent,
    UbicacionesFormComponent,
    EstatusOrdenListComponent,
    EstatusOrdenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
