import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {
  public heroe!: Heroe;
  public id;
  constructor(private activeRoute:ActivatedRoute,private heroeService:HeroesService,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      switchMap( ({id}) => this.heroeService.getHeroePorId(id) )
    ).subscribe(heroe =>{
     this.heroe = heroe
    })
   /*  this.traerHeroe(this.id) */
  }
 /*  traerHeroe(id){
    this.heroeService.getHeroePorId(id).subscribe(resp =>{
     
        
        this.heroe = resp
    
      console.log(this.heroe)
    })
  } */
regresar(){
  this.router.navigate(['/heroes/listado'])
}

}
