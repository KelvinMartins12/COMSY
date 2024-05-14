import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import { Pratos } from "../api/pratos";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PratosService {
    private dbPrato: AngularFireList<Pratos>;
    constructor(private db: AngularFireDatabase) {
        this.dbPrato = db.list('/pratos');
    }

    // Get all pratos
    getAll() {
        return this.db.list('/pratos').valueChanges();
    }

    // Get a single prato by id
    get(id: string) {
        return this.db.object('/pratos/' + id).valueChanges();
    }
    deleteAll(): Promise<void> {
        return this.dbPrato.remove();
    }

    // Add a new prato
    add(prato: Pratos) {
        return this.db.list('/pratos').push(prato);
    }

    addMultiplePratos(pratos: Pratos[]): Observable<void> {
        return new Observable(observer => {
            let remainingPratos = pratos.length;
            pratos.forEach(prato => {
                this.db.list('/pratos').push(prato).then(() => {
                    remainingPratos--;
                    if (remainingPratos === 0) {
                        observer.complete();
                    }
                });
            });
        });
    }
}
