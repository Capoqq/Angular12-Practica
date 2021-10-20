import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
  li{
    cursor:pointer
  }
  `
  ]
})
export class PorPaisComponent implements OnInit {
  termino:string ="";
  dependiendo = "Buscar por Pais";
  hayError:boolean = false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSug = false
  constructor(private servicio:PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.hayError = false
    this.termino = termino
    this.servicio.buscarPais(termino).subscribe(paises =>{
    this.paises = paises
    console.log(paises)
    }, (err) =>{
      console.log('error');
      console.info(err);
      this.hayError = true
      this.paises = []
    });
    console.log(this.termino)
  }
  sugerencia(termino:string){
    this.mostrarSug = true
    this.termino = termino
    this.hayError= false;
  this.servicio.buscarPais(termino).subscribe(res =>{
    this.paisesSugeridos = res.splice(0,5)
  }, (err)=>{
    this.paisesSugeridos = []
  })
  }
  buscarSugerido(termino){
  this.servicio.buscarPais(termino).subscribe(res =>{
    this.paises = res
  })
  this.mostrarSug = false
  }
}
