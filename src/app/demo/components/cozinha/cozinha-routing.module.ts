import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CozinhaComponent} from "./cozinha.component";

@NgModule(
    {
        imports: [RouterModule.forChild([
            {
                path: '', component: CozinhaComponent
            }
        ])],
        exports: [RouterModule]

    })
export class CozinhaRoutingModule {
}
