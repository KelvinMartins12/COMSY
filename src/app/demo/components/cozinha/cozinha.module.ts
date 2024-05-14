import {NgModule} from "@angular/core";
import {CozinhaRoutingModule} from "./cozinha-routing.module";
import {CozinhaComponent} from "./cozinha.component";

@NgModule({
    imports: [
        CozinhaRoutingModule
    ],
    declarations: [
        CozinhaComponent
    ]
})
export class CozinhaModule {
}
