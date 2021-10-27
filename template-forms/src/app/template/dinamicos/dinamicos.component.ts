import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito {
  id:number;
  nombre:string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('formularioDinamico') formularioDinamico!:NgForm; 
  persona: Persona = {
    nombre:'Miguel',
    favoritos:[
      {
        id:1
      , nombre:'Fornite'
      },
      {
        id:2,
        nombre:'Super smash'
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }
  guardar(){
    console.log('Formulario posteado')
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
  agregar(){
    let id = this.persona.favoritos.length + 1
     this.persona.favoritos.push({ "id":id  ,"nombre": this.formularioDinamico.controls.nombreJuego.value})
     this.formularioDinamico.controls.nombreJuego.setValue('')
  }
}
