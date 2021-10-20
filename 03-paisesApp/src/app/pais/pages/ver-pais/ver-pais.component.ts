import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activate:ActivatedRoute, private servicio:PaisService) { }
  pais!:Country;
  ngOnInit(): void {
    this.activate.params.pipe(
      switchMap((param) => this.servicio.getPaisCodigo(param.id)),
      tap( resp =>  console.log(resp))
    ).subscribe(pais =>{
     /*  console.log(pais) */
      this.pais = pais
    })
    /* this.activate.params.subscribe(params =>{
      console.log(params.id);
      this.servicio.getPaisCodigo(params.id).subscribe(pais =>{
        console.log(pais)
      })
    }) */
  }

}
