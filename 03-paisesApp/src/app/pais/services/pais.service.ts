import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';
  constructor(private http:HttpClient) { }
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
     return this.http.get<Country[]>(url);
  }
  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
     return this.http.get<Country[]>(url);
  }
  getPaisCodigo(termino:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${termino}`;
     return this.http.get<Country>(url);
  }
  buscarRegion(region:string):Observable<Country>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country>(url);
  }
}
