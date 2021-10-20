import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino:string ="";
  hayError:boolean = false;
  paises:Country[] = [];
  dependiendo = "Buscar por Ciudad";
  constructor(private servicio:PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.hayError = false
    this.termino = termino
    this.servicio.buscarCapital(termino).subscribe(paises =>{
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
    this.hayError= false;
    
  }
}
