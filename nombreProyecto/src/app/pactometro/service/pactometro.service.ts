import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partido } from '../dominio/partido';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PactometroService {

  url = 'https://cursosdedesarrollo.com/pactometro/resultados.json';

  constructor(private _httpClient : HttpClient) {

    console.log('TodoService inicializado...');

   }

   getData() {
    return this._httpClient.get<Observable<Partido[]>>(this.url)
        .pipe(catchError(this.handleError('get', [])));
  }

    private handleError (operation = 'operation', result? : string[]) {
      return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
      };
    }
}



