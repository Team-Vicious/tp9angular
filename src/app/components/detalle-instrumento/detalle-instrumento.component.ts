import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {InstrumentService} from 'src/app/services/instrument.service'; 

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento: any;

  constructor(private activatedRoute:ActivatedRoute, private servicioInstrumento:InstrumentService) {
   // console.log("ID PARAM " + this.activatedRoute.params['id']);
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.instrumento = this.servicioInstrumento.getInstrumentoXId(params['id'])
    }) 
  }

  envio(envio:string){
    if (envio == 'G') {
            
            
      return true;
  }else{
      return false;
  }
  }
  ngOnInit(): void {
  }
   }

 


