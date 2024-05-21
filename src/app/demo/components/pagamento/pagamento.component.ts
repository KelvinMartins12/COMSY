import {Component, Input} from '@angular/core';
import {PedidoService} from "../../services/pedido.service";
import {Pedido} from "../../api/pedido";
import {MesaService} from "../../services/mesa.service";
import {Observable} from "rxjs";
import {Mesa} from "../../api/mesa";
import {Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
    selector: 'app-pagamento',
    templateUrl: './pagamento.component.html',
    styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent {
    mesas: any[];
    selectedMesa: Mesa;
    pedido: Pedido;

    constructor(private location: Location, private mesaService: MesaService, private pedidoService: PedidoService) {
        this.mesaService.getAll().valueChanges().subscribe(mesas => {
            this.mesas = mesas;
        });
    }

    ngOnInit() {
    }

    onMesaSelect(valor: any, mesaId: number): void {
        this.pedido = null
        console.log(mesaId)
        this.pedidoService.getPedidoByMesa(mesaId).subscribe(pedidos => {
            if (pedidos.length > 0) {
                this.pedido = pedidos[0];
            } else {
                this.pedido = null;
            }
        });
    }

    FinalizaPedido(idMesa) {
        console.log(idMesa)
        this.pedidoService.deletePedidoByMesa(idMesa).then(() => {
            console.log('Pedidos excluídos com sucesso');
            this.location.go(this.location.path())

        }).catch(error => {
            console.error('Erro ao excluir pedidos:', error);
        });

    }
}
