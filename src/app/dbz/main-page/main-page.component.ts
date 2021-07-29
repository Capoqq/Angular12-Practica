import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  constructor(private dbzService:DbzService) {
    /* this.personajes = this.dbzService.personajes */
  }
  /* get personajes():any{
   return this.dbzService.personajes
  } */
  ngOnInit(): void {
  }
  nuevo:Personaje ={
    nombre: '',
    poder:0
  };

cambiarNombre(e:any){
console.log(e.target.value)
}


}
