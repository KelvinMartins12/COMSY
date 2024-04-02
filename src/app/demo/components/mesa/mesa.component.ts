import {Component} from '@angular/core';
import {MesaService} from "src/app/demo/service/mesa.service";
import {Mesa, MesaEstado} from "../../api/mesa";

@Component({
    selector: 'app-mesa',
    templateUrl: './mesa.component.html',
    styleUrl: './mesa.component.scss'
})
export class MesaComponent {
    mesas: Mesa[] = [];
    estadoCounts: any = {};

    colors: {state: string, color: string}[] = [
        {state: 'Encaminhado pra cozinha', color: 'yellow'},
        {state: 'Pronto para Servir', color: 'red'},
        {state: 'Disponível', color: 'green'},
        {state: 'Aguardando Pagamento', color: 'black'},
        {state: 'Limpeza', color: 'grey'}
    ];

    constructor(private mesaService: MesaService) {
    }

    ngOnInit() {
        this.mesaService.getMesas().then(result => {
            this.mesas = result.mesas;
            this.estadoCounts = result.estadoCounts;
        });
    }
    getColor(state: string): string {
        const colorObj = this.colors.find(c => c.state === state);
        return colorObj ? colorObj.color : 'white';
    }
    calculaSomaEstados(): void {
        this.estadoCounts = {
            Disponível: 0,
            Encaminhando_pra_cozinha: 0,
            Pronto_pra_Servir: 0,
            Aguardando_Pagamento: 0,
            Limpeza: 0,
            Total: 0,
        };
        this.mesas.forEach((mesa) => {
            this.estadoCounts[mesa.estado]++;
            this.estadoCounts.Total++;
        });
    }
}
