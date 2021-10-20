import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }
  getHeroes(): Observable<Heroe[]>{
   return this.http.get<Heroe[]>(`${environment.url}/heroes`)
  }
  getHeroePorId(id):Observable<Heroe>{
    return this.http.get<Heroe>(`${environment.url}/heroes/${id}`)
  }
  getSugerencia(termino:string):Observable<Heroe[]>{
  return this.http.get<Heroe[]>(`${environment.url}/heroes?q=${termino}&_limit=6`)
  }
  agregarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${environment.url}/heroes`, heroe)
  }
  editarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${environment.url}/heroes/${heroe.id}`, heroe)
  }
  eliminarHeroe(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.url}/heroes/${id}`)
  }
}
