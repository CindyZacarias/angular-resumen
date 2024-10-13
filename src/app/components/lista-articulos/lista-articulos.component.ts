import { Component, OnInit, inject } from '@angular/core';
import { ArticuloDetalle } from '../../shared/interfaces/articulo-detalle';
import { ArticuloService } from '../../shared/services/articulo.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css',
})
export class ListaArticulosComponent implements OnInit {
  articulos!: Observable<Array<ArticuloDetalle>>;

  servicio = inject(ArticuloService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.articulos = this.servicio.getArticuloApiRest();
  }

  verArticulo(id: number): void {
    this.router.navigate(['/vista-articulo', id]);
  }
}
