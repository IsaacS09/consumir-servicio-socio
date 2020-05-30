import { Injectable } from '@angular/core';
import { Socio } from '../modelos/socio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private socioInfo: Socio = [{id: '', nombre: '', descripcion: ''}];
  private urlServicio = 'https://ws-neec.herokuapp.com/api/categoria-socio';

  constructor( private http: HttpClient ) { }

  public getCategoriaSocio(): Observable<Socio> {
    return this.http.get<Socio>(this.urlServicio);

  }
}
