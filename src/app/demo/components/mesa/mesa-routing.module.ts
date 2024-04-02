import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MesaComponent } from './mesa.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MesaComponent }
    ])],
    exports: [RouterModule]
})
export class MesaRoutingModule { }
