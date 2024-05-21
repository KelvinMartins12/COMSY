import {Component, OnInit} from '@angular/core';
import {Pratos} from "../../api/pratos";
import {PratosService} from "../../services/prato.service";
import {Pedido} from "../../api/pedido";
import {ActivatedRoute} from "@angular/router";
import {PedidoService} from "../../services/pedido.service";
import {COLLECTION_ENABLED} from "@angular/fire/compat/analytics";


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit{
    mesaEscolhida: string;
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
    clicked = false
    selectedCategory: string = 'Todos';
    pedido: Pedido = {
        id: '',
        pratos: [],
        total: 0,
        idMesa: null
    };

    pratos: unknown[] = [];

    constructor(private pratoService: PratosService, private route: ActivatedRoute,private pedidoService:PedidoService) {
    }
    ngOnInit() : void    {
        this.pratoService.getAll().subscribe(pratos =>{
            this.pratos = pratos;
        })
        this.mesaEscolhida = this.route.snapshot.paramMap.get('id');

    }

    addPrato(prato: Pratos): void {
        prato.quantidade = prato.quantidade + 1;
        this.pedido.pratos.push(prato);
        this.pedido.total += prato.valor;

        this.pedido.idMesa = +this.route.snapshot.paramMap.get('id');

        console.log(this.mesaEscolhida)
    }
    removePrato(prato: Pratos): void {
        prato.quantidade = (prato.quantidade || 0) - 1;
        const index = this.pedido.pratos.indexOf(prato);
        if (index >= 0) {
            this.pedido.pratos.splice(index, 1);
            this.pedido.total -= prato.valor;
        }
    }

    save(pedido: Pedido): void {
        this.pedidoService.create(pedido)
        this.pedido.pratos = []
    }

}
