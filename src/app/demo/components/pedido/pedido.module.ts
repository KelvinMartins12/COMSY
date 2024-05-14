import { NgModule } from '@angular/core';
import {PedidoComponent} from "./pedido.component";
import {PedidoRoutingModule} from "./pedido-routing.module";
import {DataViewModule} from "primeng/dataview";
import {DividerModule} from "primeng/divider";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {SharedModule} from "primeng/api";
import { TagModule } from "primeng/tag";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";



@NgModule({
    imports: [
        TagModule,
        CommonModule,
        PedidoRoutingModule,
        DataViewModule,
        DividerModule,
        NgForOf,
        NgIf,
        SharedModule,
        CardModule,
        ButtonModule,
        DialogModule

    ],
     declarations: [PedidoComponent]
})
export class PedidoModule { }
