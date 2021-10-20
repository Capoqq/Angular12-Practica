import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:10px
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  constructor(private servicio:PaisService) { }
  regiones:string[] =['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva = '';
  ngOnInit(): void {
  }
  paises:any;
  activarRegion(region){
    if(region == this.regionActiva){
      return;
    }
    this.regionActiva = region
    this.paises = []
    //llamar al servicio
    this.servicio.buscarRegion(region).subscribe(paises =>{
      console.log(paises)
      this.paises = paises
    })
  }
  getClaseCSS(item){
    return (item === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }
}
