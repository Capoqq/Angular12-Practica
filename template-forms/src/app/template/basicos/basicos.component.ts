import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!:NgForm; 
  initForm = {
    producto:'RTX 4020',
    precio:0,
    existencia:10
  }
  constructor() { }

  ngOnInit(): void {
  }
guardar(){
  //console.log(this.miFormulario)
  console.log('Posteo Correcto')
  this.miFormulario.resetForm({
    precio:0,
    existencia:0
  });
}
nombreValido(): boolean {
  return !this.miFormulario?.controls.producto?.valid && this.miFormulario?.controls.producto?.touched;
}
precioValido(){
 return this.miFormulario?.controls.precio?.value < 0 && this.miFormulario?.controls.precio?.touched 
 
}
}
