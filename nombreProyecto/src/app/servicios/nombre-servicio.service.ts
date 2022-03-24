import { Injectable } from '@angular/core';
@Injectable({
 providedIn: 'root'
})
export class TodoService {

    private dato: string;

 constructor() {
 console.log('TodoService inicializado...');
 this.dato = "midato";
 }

 getDato() : string{
     return this.dato;
 }
}