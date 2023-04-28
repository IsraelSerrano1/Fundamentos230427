import { Component } from '@angular/core';
import { Detalle } from '../_modelo/detalle';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicioPedidosDetallesService } from '../servicio-pedidos-detalles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent {
  form: FormGroup;
  detalle: Detalle;
  idAux: number;

  constructor(
    private activarRutas: ActivatedRoute,
    public servicioPD: ServicioPedidosDetallesService
  ) {}

  ngOnInit() {
    this.activarRutas.params.subscribe((datos) => {
      this.idAux = datos['id'];
      this.form = new FormGroup({
        idProducto: new FormControl(''),
        cantidad: new FormControl(''),
      });
    });
  }

  addDetalle() {
    console.log('entra add');
    let detalleAux: Detalle = new Detalle(
      this.idAux,
      this.form.value.idProducto,
      this.form.value.cantidad
    );
    this.servicioPD.addDetalle(detalleAux);
    this.detalle = new Detalle(0, 0, 0);
    this.form.reset();
  }
}
