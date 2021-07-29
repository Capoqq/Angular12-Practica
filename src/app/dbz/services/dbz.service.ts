import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  constructor(){
    console.log("Servicio Inicializado")
  }
 private _personajes: Personaje[] = [
    {
      nombre:"Goku",
      poder:15000
    },
     {
       nombre:'Vegeta',
       poder:10000
     }
  ];
  get personajes(){
   return [...this._personajes]
  }
  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje)
  }
}
