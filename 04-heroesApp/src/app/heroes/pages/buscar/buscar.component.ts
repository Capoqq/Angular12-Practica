import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
public termino: string = "";
public heroes:Heroe[] = [];
public heroeSeleccionado!:Heroe | undefined;
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }
  buscando(){
    this.heroesService.getSugerencia(this.termino.trim()).subscribe(resp =>{
    
      this.heroes = resp
    })
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent ){
    if(event.option.value !== ''){

      const heroe:Heroe = event.option.value;
      this.termino = heroe.superhero;
      this.heroesService.getHeroePorId(heroe.id).subscribe(resp =>{
       this.heroeSeleccionado = resp
      })
    } else{
      console.log('no hay valor')
      this.heroeSeleccionado = undefined
      return false
    }
  }
}
