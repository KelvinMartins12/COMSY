import {Component, Input} from '@angular/core';
import {PedidoService} from "../../services/pedido.service";
import {Pedido} from "../../api/pedido";
import {MesaService} from "../../services/mesa.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent {
  mesas: any[];
  selectedMesa: any
  pedido: Pedido;

  constructor(private mesaService: MesaService,private pedidoService: PedidoService) {
    this.mesaService.getAll().valueChanges().subscribe(mesas => {
      this.mesas = mesas;
    });
  }

  buscarPagamentoPendente(mesaEscolhida: any) {
    this.pedidoService.getPedidoByMesa(mesaEscolhida.key).subscribe(pedidos => {
      if (pedidos.length > 0) {
        this.pedido = pedidos[0];
      } else {
        this.pedido = null;
      }
    });
  }
  ngOnInit() {

  }

}
