import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
    { path: 'instrumentos', component: InstrumentosComponent },
    { path: 'donde-estamos', component: UbicacionComponent },
    { path: 'detalleInstrumento/:id', component: DetalleInstrumentoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
