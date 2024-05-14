import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pedido} from "../api/pedido";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    constructor(private http: HttpClient) {
    }

    getPedidos() {
        return this.http.get<any>('assets/demo/data/pedidos.json')
            .toPromise()
            .then(res => {
                const pedidos: Pedido[] = res.data as Pedido[];
                return {pedidos};
            });
    }
}
