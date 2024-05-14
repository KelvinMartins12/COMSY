import {Component} from '@angular/core';
import {MesaService} from "src/app/demo/services/mesa.service";
import {Mesa} from "../../api/mesa";
import {Router} from "@angular/router";
import {Pratos} from "../../api/pratos";
import {PratosService} from "../../services/prato.service";

@Component({
    selector: 'app-mesa',
    templateUrl: './mesa.component.html',
    styleUrl: './mesa.component.scss'
})
export class MesaComponent {
    mesas: Mesa[] = [];
    // pratos: Pratos[] = [
    //     { id: '1', descricao: 'Strogonoff de frango - Pequeno', valor: 18,categoria:'Prato feito', foto:'strogonoffp.jpg',quantidade:0},
    //     { id: '2', descricao: 'Strogonoff de frango - Médio', valor: 28,categoria:'Prato feito',foto:'strogonoffm.jpg',quantidade:0},
    //     { id: '3', descricao: 'Frango Assado - Pequeno', valor: 18,categoria:'Prato feito',foto:'frangoap.jpg',quantidade:0 },
    //     { id: '4', descricao: 'Frango Assado - Médio', valor: 28,categoria:'Prato feito',foto:'frangoam.jpg',quantidade:0 },
    //     { id: '5', descricao: 'Bife acebolado - Pequeno', valor: 30,categoria:'Prato feito',foto:'bifeap.jpg',quantidade:0 },
    //     { id: '6', descricao: 'Bife acebolado - Médio', valor: 40,categoria:'Prato feito',foto:'bifeam.jpg' ,quantidade:0},
    //     { id: '7', descricao: 'Coxinha', valor: 7,categoria:'Salgados',foto:'coxinha.jpg' ,quantidade:0},
    //     { id: '8', descricao: 'Kibe', valor: 7,categoria:'Salgados',foto:'kibe.jpg' ,quantidade:0},
    //     { id: '9', descricao: 'Esfiha', valor: 7,categoria:'Salgados',foto:'esfiha.jpg',quantidade:0},
    // ];
    estadoCounts: any = {};
    mesaEscolhida: number;

    colors: { state: string, color: string }[] = [
        {state: 'Encaminhado pra cozinha', color: 'yellow'},
        {state: 'Pronto para Servir', color: 'red'},
        {state: 'Disponível', color: 'green'},
        {state: 'Aguardando Pagamento', color: 'black'},
        {state: 'Limpeza', color: 'grey'}
    ];

    constructor(private mesaService: MesaService, private router: Router, private pratoService: PratosService) {
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

    selecionaMesa(mesaEscolhida) {
        this.router.navigate(['mesas/pedidos'], {state: {mesaEscolhida}})
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
        // this.mesas.forEach((mesa) => {
        //     this.estadoCounts[mesa.estado]++;
        //     this.estadoCounts.Total++;
        // });
    }

}
