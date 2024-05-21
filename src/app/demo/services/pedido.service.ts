import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/compat/database";
import {Pratos} from "../api/pratos";
import {Pedido} from "../api/pedido";
import {Observable, take} from "rxjs";
import {map} from "rxjs/operators";
import {MesaService} from "./mesa.service";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {
    private dbPath = '/pedidos';
    pedidosRef: AngularFireList<Pedido>;

    constructor(private db: AngularFireDatabase, private mesaService: MesaService) {
        this.pedidosRef = db.list(this.dbPath);
    }

    getAll(): AngularFireList<Pedido> {
        return this.pedidosRef;
    }

    create(pedido: Pedido): any {
        return this.pedidosRef.push(pedido);
    }

    getPedidoByMesa(idMesa: number): Observable<Pedido[]> {
        return this.pedidosRef.valueChanges().pipe(
            map(pedidos => pedidos.filter(pedido => pedido.idMesa == idMesa))
        );
    }

    update(key: string, value: any): Promise<void> {
        return this.pedidosRef.update(key, value);
    }


    deletePedidoByMesa(idMesa: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getPedidoByMesa(idMesa).subscribe(pedidos => {
                if (pedidos && pedidos.length > 0) {
                    pedidos.forEach(pedido => {
                        this.delete(pedido.id).then(() => {
                            // Atualize o estado da mesa para "Disponível"
                            this.mesaService.update(idMesa.toString(), { estado: 'Disponível' }).then(() => {
                                // Atualização bem-sucedida
                            }).catch(error => {
                                reject(error);
                            });
                        }).catch(error => {
                            reject(error);
                        });
                    });
                } else {
                    resolve();
                }
            });
        });
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
