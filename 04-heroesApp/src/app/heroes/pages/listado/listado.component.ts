import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px
    }
    `
  ]
})
export class ListadoComponent implements OnInit {
public heroes
  constructor(private servicio:HeroesService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(){
    this.servicio.getHeroes().subscribe(resp =>{
    this.heroes = resp
    })
  }
}
