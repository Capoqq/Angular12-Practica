import {Component} from '@angular/core';


@Component({
  templateUrl: 'heroe.component.html',
  selector: 'app-heroe'
})
export class HeroeComponent{
 nombre: string = 'Iron Man';
 edad: number = 23;
 get nombreCapitalizado(){
   return this.nombre.toUpperCase()
 }
 obtenerNombre = (): string => {
 return `${this.nombre} - ${this.edad}`
 }
 cambiarNombre():void {
  this.nombre = 'Spiderman';
 }
 cambiarEdad():void {
   this.edad = 30
 }
 }
