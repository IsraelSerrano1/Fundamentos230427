import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {path:"", component:PedidosComponent, children:[
    {path:"detalle/:id", component:DetallesComponent}
  ]
},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
