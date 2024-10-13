import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticulosComponent } from '../../components/lista-articulos/lista-articulos.component';
import { VistaArticuloComponent } from '../../components/vista-articulo/vista-articulo.component';
import { UpdateArticuloComponent } from '../../components/update-articulo/update-articulo.component';

const routes: Routes = [
  { path: 'lista-articulos', component: ListaArticulosComponent },
  { path: 'vista-articulo/:id', component: VistaArticuloComponent },
  { path: 'update-articulo/:id', component: UpdateArticuloComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ArticuloModule { }
