import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from "./components/cliente/eliminar-cliente/eliminar-cliente.component";

import { CrearCocheComponent } from './components/coche/crear-coche/crear-coche.component';
import { MostrarCocheComponent } from './components/coche/mostrar-coche/mostrar-coche.component';
import { ActualizarCocheComponent } from './components/coche/actualizar-coche/actualizar-coche.component';
import { EliminarCocheComponent } from "./components/coche/eliminar-coche/eliminar-coche.component";

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  
  {
    path: "Cliente",
    component: MostrarClienteComponent
  },
  {
    path: "addclientes",
    component: CrearClienteComponent
  },
  {
    path: "Cliente/edit/:id",
    component: ActualizarClienteComponent
  },
  {
    path: "deleteCliente",
    component: EliminarClienteComponent
  },



  {
    path: "Coche",
    component: MostrarCocheComponent
  },
  {
    path: "addcoche",
    component: CrearCocheComponent
  },
  {
    path: "coche/edit/:id",
    component: ActualizarCocheComponent
  },
  {
    path: "deleteCoche",
    component: EliminarCocheComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

