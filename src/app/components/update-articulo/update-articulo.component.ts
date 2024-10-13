import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticuloService } from '../../shared/services/articulo.service';
import { ArticuloDetalle } from '../../shared/interfaces/articulo-detalle';

@Component({
  selector: 'app-update-articulo',
  standalone: true,
  imports: [],
  templateUrl: './update-articulo.component.html',
  styleUrl: './update-articulo.component.css',
})
export class UpdateArticuloComponent implements OnInit {

    articuloForm!: FormGroup;
    id!: number;
    error: string = '';

    constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

    ngOnInit(): void {
    this.route.params.subscribe(params => {
    });
  }
}
