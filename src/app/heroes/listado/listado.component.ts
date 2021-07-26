import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroes: string[] = ['Spidermna','IronMan','Hulk','Thor'];
  borrado:any = '';
  borrarHeroe(){
   this.borrado = this.heroes.pop()
  }
}
