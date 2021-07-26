import { Component } from "@angular/core";
@Component({
  selector:'app-contador',
  template:`
<p>{{title}}</p>
<h3>La base es: {{base}}</h3>
<button (click)="acumular(base)">
  + {{base}}
</button>
<span>{{numero}}</span>
<button (click)="acumular(-base)">
  - {{base}}
</button>


`
})
export class ContadorComponent{
  public title:string = 'Contador APP';
  public numero:number = 10;
  public base:number = 5;
 acumular = (valor:number) =>{
  this.numero += valor;
  }
}
