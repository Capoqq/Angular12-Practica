import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService:DbzService) { }
 @Input() nuevo:any;
 /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  ngOnInit(): void {
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo)
   /*  this.onNuevoPersonaje.emit(this.nuevo) */
    this.nuevo = {
      nombre:'',
      poder:0
    }


  }
}
