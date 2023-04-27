import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pedido } from '../_modelo/pedido';
import { ActivatedRoute } from '@angular/router';
import { ServicioPedidosDetallesService } from '../servicio-pedidos-detalles.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent {
  form: FormGroup;
  pedido: Pedido = new Pedido(0, '', '');
  pedidoAux = new Pedido(0, '', '');
  idPedidoAux = new FormControl(1);


  constructor(private servicioPD: ServicioPedidosDetallesService) {}

  ngOnInit() {
    this.form = new FormGroup({
      pedidoId:this.idPedidoAux,
      clienteId: new FormControl(''),
      formaPago: new FormControl(''),
      direccion: new FormControl(''),
    });
  }

  addPedido() {
    console.log('entra');

    this.pedidoAux.cliente_id = this.form.value.clienteId;
    this.pedidoAux.forma_pago = this.form.value.formaPago;
    this.pedidoAux.direccion_entrega = this.form.value.direccion;

    this.servicioPD.addPedido(this.pedidoAux);
    this.pedidoAux = new Pedido(0, '', '');
    this.form.reset();
    this.idPedidoAux.setValue(this.pedidoAux.pedidos_id);

  }
}
