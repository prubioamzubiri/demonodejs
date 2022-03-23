import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    NombreComponenteComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
