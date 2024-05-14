import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MesaComponent} from './mesa.component';
import {PedidoRoutingModule} from "../pedido/pedido-routing.module";


const routes: Routes = [
    {
        path: '',
        component: MesaComponent,
        children: [
            {
                path: 'pedidos',
                loadChildren: () => import('../pedido/pedido-routing.module').then(m => m.PedidoRoutingModule)
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes), PedidoRoutingModule
    ],
})
export class MesaRoutingModule {
}
