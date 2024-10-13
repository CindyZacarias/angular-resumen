import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { VistaArticuloComponent } from './components/vista-articulo/vista-articulo.component';
import { UpdateArticuloComponent } from './components/update-articulo/update-articulo.component';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListaArticulosComponent,
    VistaArticuloComponent,
    UpdateArticuloComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'resumen';
  env = environment;
}
