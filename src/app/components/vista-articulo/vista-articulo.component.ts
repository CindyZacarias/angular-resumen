import { Component, OnInit, inject } from '@angular/core';
import { ArticuloDetalle } from '../../shared/interfaces/articulo-detalle';
import { ArticuloService } from '../../shared/services/articulo.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-vista-articulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-articulo.component.html',
  styleUrl: './vista-articulo.component.css',
})
export class VistaArticuloComponent implements OnInit {
  articulo?: ArticuloDetalle;

  articulos!: Observable<Array<ArticuloDetalle>>;

  carga: boolean = true;

  servicio = inject(ArticuloService);

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService
  ) {}

  ngOnInit(): void {
    //this.articulos = this.servicio.getArticuloApiRest();
    this.route.params.subscribe((params) => {
      // const id = <string>params['id'];
      console.log(params['id']);
      this.articulo = params['id'];
      //  this.articulo = this.articulos.map(
      //    (articulo) => articulo.id === params['id']
      //  );
      this.articulos = this.servicio.getArticuloApiRest();
    });
  }
}

