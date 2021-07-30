import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicio:GifsService) { }

  ngOnInit(): void {
  }
  
  get historial(){
   return this.servicio.historial;
   console.log(this.historial)
  }
  buscar(termino){
 this.servicio.buscarGifs(termino)
  }
}
