import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PedidoComponent} from "./pedido.component";


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'pedidos', component: PedidoComponent
        }
    ])],
    exports: [RouterModule]

})
export class PedidoRoutingModule {

}
