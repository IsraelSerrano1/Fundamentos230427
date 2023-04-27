export class Pedido{

    pedidos_id: number;
    cliente_id: number;
    forma_pago: string;
    direccion_entrega: string;
    static idP=-1;

    constructor(cliente_id:number,forma_pago:string,direccion_entrega:string){
        Pedido.idP++
        this.pedidos_id = Pedido.idP;
        this.cliente_id = cliente_id;
        this.forma_pago = forma_pago;
        this.direccion_entrega =direccion_entrega
        
    }
}