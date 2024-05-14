import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {AuthGuard} from "./demo/components/auth/services/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
                    },
                    {
                        path: 'mesas',
                        loadChildren: () => import('./demo/components/mesa/mesa.module').then(m => m.MesaModule),
                    },
                    {
                        path: 'mesas/pedidos',
                        loadChildren: () => import('./demo/components/pedido/pedido.module').then(m => m.PedidoModule),
                    },
                    {
                        path: 'pagamento',
                        loadChildren: () => import('./demo/components/pagamento/pagamento.module').then(m => m.PagamentoModule)
                    },
                    {
                        path: 'cozinha',
                        loadChildren: () => import('./demo/components/cozinha/cozinha.module').then(m => m.CozinhaModule)
                    },
                ]
            },

            {path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule)},
            {
                path: 'landing',
                loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule)
            },
            {path: 'notfound', component: NotfoundComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
