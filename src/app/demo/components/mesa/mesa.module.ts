import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaRoutingModule } from './mesa-routing.module';
import { MesaComponent } from './mesa.component';
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
import {TagModule} from "primeng/tag";


@NgModule({
    imports: [
        CommonModule,
        MesaRoutingModule,
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
        TagModule
    ],
    declarations: [MesaComponent]
})
export class MesaModule { }
