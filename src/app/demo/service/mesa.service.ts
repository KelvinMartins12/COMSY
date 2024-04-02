import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Mesa} from "../api/mesa";
@Injectable()
export class MesaService {
    constructor(private http: HttpClient) { }

    getMesas() {
        return this.http.get<any>('assets/demo/data/mesas.json')
            .toPromise()
            .then(res => {
                const mesas: Mesa[] = res.data as Mesa[];
                const estadoCounts: { [key: string]: number } = {};
                mesas.forEach(mesa => {
                    if (estadoCounts[mesa.estado]) {
                        estadoCounts[mesa.estado]++;
                    } else {
                        estadoCounts[mesa.estado] = 1;
                    }
                });
                return { mesas, estadoCounts };
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
