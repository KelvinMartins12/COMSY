import {Pratos} from "./pratos";

export interface Pedido {
    id: string;
    pratos: Pratos[];
    total: number;
    nomeMesa: string;
}
