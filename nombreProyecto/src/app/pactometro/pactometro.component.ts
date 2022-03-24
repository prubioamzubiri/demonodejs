import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Partido } from './dominio/partido';
import { PactometroService } from './service/pactometro.service';

@Component({
  selector: 'app-pactometro',
  templateUrl: './pactometro.component.html',
  styleUrls: ['./pactometro.component.css']
})
export class PactometroComponent implements OnInit {

  partidos = this.pactometroService.getData().toPromise();
  

  constructor(protected pactometroService : PactometroService) { 

    

  }

  ngOnInit(): void {
  }

}
