import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/servicios/nombre-servicio.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  dato : string;

  constructor(public todoService : TodoService) { 

    this.dato = todoService.getDato();

  }

  ngOnInit(): void {
  }

}
