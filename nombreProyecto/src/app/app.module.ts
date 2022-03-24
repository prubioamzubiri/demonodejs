import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { ListadoComponent } from './listado/listado.component';
import {TodoService} from "./servicios/nombre-servicio.service";
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { PactometroComponent } from './pactometro/pactometro.component';


@NgModule({
  declarations: [
    AppComponent,
    NombreComponenteComponent,
    ListadoComponent,
    NuevoComponent,
    PactometroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
