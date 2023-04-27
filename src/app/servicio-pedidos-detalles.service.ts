import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Detalle } from './_modelo/detalle';
import { Pedido } from './_modelo/pedido';

@Injectable({
  providedIn: 'root'
})
export class ServicioPedidosDetallesService {
  detalles: Detalle[]=[];
  pedidos: Pedido[]=[];
  detallesAux: Detalle[]=[];

  constructor() { }

  addPedido(newPedido: Pedido){
    console.log("entra en addPedido")
    this.pedidos.push(newPedido)
    console.log(this.pedidos);
    for(let i=0;i<=this.detallesAux.length-1;i++){
      this.detalles.push(this.detallesAux[i])
    }   
    this.detallesAux.splice(0,this.detallesAux.length)
    console.log(this.detalles);
    
  }

  addDetalle(newDetalle: Detalle){
    this.detallesAux.push(newDetalle);
    console.log(this.detallesAux);    
  }
}
