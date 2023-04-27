export class Detalle{

    id_Pedido: number;
    id_Producto: number;
    cantidad: number;

    constructor(id_Pedido: number,id_Producto: number, cantidad: number){

        this.id_Pedido = id_Pedido;
        this.id_Producto = id_Producto;
        this.cantidad = cantidad;
    }
}