import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InstrumentosComponent,
    UbicacionComponent,
    DetalleInstrumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
