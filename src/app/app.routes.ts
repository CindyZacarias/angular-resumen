import { Routes } from '@angular/router';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { VistaArticuloComponent } from './components/vista-articulo/vista-articulo.component';
import { UpdateArticuloComponent } from './components/update-articulo/update-articulo.component';

export const routes: Routes = [
  { path: 'lista-articulos', component: ListaArticulosComponent },
  { path: 'vista-articulo/:id', component: VistaArticuloComponent },
  { path: 'update-articulo/:id', component: UpdateArticuloComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
