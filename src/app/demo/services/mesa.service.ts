import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import { Mesa} from "../api/mesa";
import {Observable} from "rxjs";
@Injectable()
export class MesaService {
    private dbPath = '/mesas';
    mesasRef: AngularFireList<Mesa>;
    constructor(private http: HttpClient, private db: AngularFireDatabase) {
        this.mesasRef = db.list(this.dbPath)
    }

    create(mesa: Mesa): void {
        this.mesasRef.push(mesa);
    }

    getAll(): AngularFireList<Mesa> {
        return this.mesasRef;
    }

    update(key: string, value: any): Promise<void> {
        return this.mesasRef.update(key, value);
    }

    delete(key: string): Promise<void> {
        return this.mesasRef.remove(key);
    }

    deleteAll(): Promise<void> {
        return this.mesasRef.remove();
    }

    getMesas(): Observable<{ mesas: Mesa[]; estadoCounts: { [key: string]: number } }> {
        return new Observable<{ mesas: Mesa[]; estadoCounts: { [key: string]: number } }>(observer => {
            this.getAll().valueChanges().subscribe(mesas => {
                const estadoCounts: { [key: string]: number } = {};
                const formattedMesas: Mesa[] = mesas.map(mesa => {
                    if (estadoCounts[mesa.estado]) {
                        estadoCounts[mesa.estado]++;
                    } else {
                        estadoCounts[mesa.estado] = 1;
                    }
                    return mesa;
                });
                observer.next({ mesas: formattedMesas, estadoCounts });
            }, error => {
                observer.error(error);
            });
        });
    }
    calculaSomaEstados() {
        return this.http.get<any>('assets/demo/data/mesas.json')
            .toPromise()
            .then(res => res.data as Mesa[])
            .then(mesas => {
                const estadoCounts: { [key: string]: number } = {};
                mesas.forEach(mesa => {
                    if (estadoCounts[mesa.estado]) {
                        estadoCounts[mesa.estado]++;
                    } else {
                        estadoCounts[mesa.estado] = 1;
                    }
                });
                return estadoCounts;
            });
    }
}
