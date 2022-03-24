import { Component, OnInit } from '@angular/core';
import { TodoService } from '../servicios/nombre-servicio.service';

@Component({
  selector: 'app-nombre-componente',
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.css']
})
export class NombreComponenteComponent implements OnInit {

  todos;
  todo;
  dato : string;

  constructor(public todoService : TodoService) {
    this.todos =[
      {text:"hacer la compra"},
      {text:"limpiar el coche"},
      {text: "trabajar... supongo"}
    ];
    this.todo = {
      text: ""
    };

    this.dato = todoService.getDato();
   }

  ngOnInit(): void {

  }

  addTodo(): void {
    console.log("enviado");
    this.todos.push({
      text : this.todo.text
    });
  }

  deleteTodo(texto : string) : void{
    
    for(var i=0; i< this.todos.length; i++)
    {
      var todo = this.todos[i];
      if(todo.text == texto)
      {
        this.todos.splice(i,1);
      }
    }

  }

}
