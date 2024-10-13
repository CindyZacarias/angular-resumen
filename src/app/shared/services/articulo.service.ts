import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticuloDetalle } from '../interfaces/articulo-detalle';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  constructor(private http: HttpClient) {}

  getArticuloApiRest(): Observable<Array<ArticuloDetalle>> {
    console.log(environment);
    return this.http.get<Array<ArticuloDetalle>>(environment.url);
  }

  getArticuloId(id: number): Observable<ArticuloDetalle> {
    const url = `${environment.url}/${id}`;
    return this.http.get<ArticuloDetalle>(url);
  }

}
