
import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  readonly API_LIST = 'https://jsonplaceholder.typicode.com/users';
  readonly API_DETAIL = 'https://jsonplaceholder.typicode.com/users/';

  constructor( private http: HttpClient ) { }

  user$ = this.http.get<any>(this.API_LIST).pipe(
    map( res => {
      return res;
    }),
    catchError( error => {
      console.log(error);
      return error;
    })
  )

  detalheUsuario(id) {
    return this.http.get<any>(this.API_DETAIL + id ).pipe(
      map( res => {
        return res;
      }),
      catchError( error => {
        console.log(error);
        return error;
      })
    )
  }
}