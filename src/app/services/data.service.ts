import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import {delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getUsuarios(){

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

  getAlbums(){

    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');

  }
  getMenuItem(){
    return this.http.get<Componente[]>('/assets/menu-options.json');
  }


  getHeroes(){
    return this.http.get<Componente[]>('/assets/superheroes.json')
    .pipe(delay(1500));//delay se utiliza para el el get se demore el tiempo que le indiques
  }
}
