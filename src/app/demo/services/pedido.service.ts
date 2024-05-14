import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from "@angular/fire/compat/database";
import { Pratos} from "../api/pratos";
import { Pedido} from "../api/pedido";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private dbPath = '/pedidos';
  pedidosRef: AngularFireList<Pedido>;

  constructor(private db: AngularFireDatabase) {
    this.pedidosRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Pedido> {
    return this.pedidosRef;
  }

  create(pedido: Pedido): any {
    return this.pedidosRef.push(pedido);
  }

  getPedidoByMesa(nomeMesa: string): Observable<Pedido[]> {
    return this.pedidosRef.valueChanges().pipe(
        map(pedidos => pedidos.filter(pedido => pedido.nomeMesa === nomeMesa))
    );
  }

  update(key: string, value: any): Promise<void> {
    return this.pedidosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.pedidosRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.pedidosRef.remove();
  }

  getPratos(pedidoId: string): AngularFireList<Pratos> {
    return this.db.list(`/pedidos/${pedidoId}/pratos`);
  }
}
