import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string = '8JvLRfJIBVvlheLlqhTbtYcx9L512Yox';
  private servicioUrl = 'https://api.giphy.com/v1/gifs';
  private _historial:string[] = [];
  public resultados:any[] = [];
  get historial(){
  
    return [...this._historial]
  }
  constructor(private http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || []
   /*  if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    } */
  }
  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase()
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
  const params = new HttpParams().set('api_key',this.apiKey).set('limit','10').set('q',query);
  console.log(params)
   this.http.get(`${this.servicioUrl}/search`,{params})
     .subscribe((resp:any) => {
       console.log(resp.data);
       this.resultados = resp.data;
       localStorage.setItem('resultado',JSON.stringify(this.resultados))
     })
    console.log(this._historial)
  }
}
