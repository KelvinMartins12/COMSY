import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PagamentoComponent } from "../pagamento/pagamento.component";
import { MesaComponent } from "../mesa/mesa.component";
import { CozinhaComponent } from "../cozinha/cozinha.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'ínicio', component: DashboardComponent },
        { path: 'mesas', component:  MesaComponent },
        { path: 'cozinha', component: CozinhaComponent },
        { path: 'pagamento', component: PagamentoComponent },

    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
