import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(private servicio:GifsService) { }

  ngOnInit(): void {
  }
  @ViewChild('txtBuscar') txtBuscar:ElementRef<HTMLInputElement>;
  buscar(){
    const valor = this.txtBuscar.nativeElement.value
    if(valor.trim().length != 0){

      this.servicio.buscarGifs(valor)
      console.log(valor)
    }
    this.txtBuscar.nativeElement.value = '';
}
}
