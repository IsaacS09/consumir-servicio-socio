import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Socio } from '../../modelos/socio';



@Component({
  selector: 'app-categoria-socio',
  templateUrl: './categoria-socio.component.html',
  styleUrls: ['./categoria-socio.component.css']
})
export class CategoriaSocioComponent implements OnInit {

  public socio: Socio = [{id: '', nombre: '', descripcion: ''}];

  constructor( private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getCategoriaSocio().subscribe( socio => (this.socio = socio));
  }

}
