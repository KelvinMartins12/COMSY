import { Component } from '@angular/core';
import {PedidoService} from "../../service/pagamento.service";
import {Pedido} from "../../api/pedido";


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {

  }

  ngOnInit() {
    this.pedidoService.getPedidos().then(result => {
      this.pedidos = result.pedidos;
    });
  }

}
