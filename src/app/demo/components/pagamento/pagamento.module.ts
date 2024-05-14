import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagamentoRoutingModule} from "./pagamento-routing.module";
import { PagamentoComponent} from "./pagamento.component";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {OrderListModule} from "primeng/orderlist";
import {PickListModule} from "primeng/picklist";
import {RatingModule} from "primeng/rating";
import {DividerModule} from "primeng/divider";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [

        CommonModule,
        PagamentoRoutingModule,
        CardModule,
        TableModule,
        ButtonModule,
        DataViewModule,
        DropdownModule,
        InputTextModule,
        OrderListModule,
        PickListModule,
        RatingModule,
        DividerModule,
        FormsModule
    ],
    declarations: [PagamentoComponent]
})
export class PagamentoModule { }
