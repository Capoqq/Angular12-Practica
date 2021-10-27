import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth:Auth | undefined;
  constructor(private http:HttpClient) { }
  get auth(): Auth{
    return {...this._auth!}
  }

  login(){
    return this.http.get<Auth>(`${environment.url}/usuarios/1`).pipe(
      tap(resp => this._auth = resp),
      tap(auth => localStorage.setItem('id',auth.id))
    )
  }
  loguot(){
   this._auth = undefined;
  }
}
