import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width:100%;
    border-radius:5px
  }
  `
  ]
})
export class AgregarComponent implements OnInit {
  formulario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    alter_ego : new FormControl(''),
    primeraAparicion : new FormControl(''),
    personajes: new FormControl(''),
    creador: new FormControl(''),
    foto: new FormControl('',Validators.required),
    id: new FormControl('')
  })
  publishers = [
    {
      id:'DC Comics',
      descripcion:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      descripcion:'Marvel - Comics'
    }
  ]
  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:''
  }
  
  constructor(private heroesService:HeroesService, private activateRouter:ActivatedRoute, public router:Router) { 
  }

  ngOnInit(): void {
    if(this.router.url.includes('editar')){

         this.activateRouter.params.pipe(
           switchMap(({id}) => this.heroesService.getHeroePorId(id))
         ).subscribe( heroe =>{
          this.heroe = heroe;
          this.formulario.patchValue({
            nombre : this.heroe.superhero,
            alter_ego:this.heroe.alter_ego,
            personajes: this.heroe.characters,
            primeraAparicion: this.heroe.first_appearance,
            creador:this.heroe.publisher,
            foto: this.heroe.alt_img,
            id: this.heroe.id
          })
         })
    }
  }
  guardarHeroe(){
    if(this.heroe.id){
      //Actualizar
      this.heroe = {
        superhero:this.formulario.controls.nombre.value,
        alter_ego:this.formulario.controls.alter_ego.value,
        characters:this.formulario.controls.personajes.value,
        first_appearance:this.formulario.controls.primeraAparicion.value,
        publisher:this.formulario.controls.creador.value,
        alt_img:this.formulario.controls.foto.value,
        id:this.formulario.controls.id.value
       }
      this.heroesService.editarHeroe(this.heroe).subscribe(resp =>{
        console.log('Actualizando',resp)
      })
    } else{
      //Crear
      this.heroe = {
       superhero:this.formulario.controls.nombre.value,
       alter_ego:this.formulario.controls.alter_ego.value,
       characters:this.formulario.controls.personajes.value,
       first_appearance:this.formulario.controls.primeraAparicion.value,
       publisher:this.formulario.controls.creador.value,
       alt_img:this.formulario.controls.foto.value,
      }
      console.log(this.heroe.id)
       this.heroesService.agregarHeroe(this.heroe).subscribe(heroe =>{
         this.router.navigate(['/heroes/editar',heroe.id]);
       })
    }
  }
  eliminarHeroe(){
    this.heroesService.eliminarHeroe(this.heroe.id).subscribe(resp =>{
      this.router.navigate(['/heroes'])
    })
  }
}
