import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Início', icon: 'fas fa-home', routerLink: ['/'] },
                    { label: 'Mesas', icon: 'fa-solid fa-table-cells-large', routerLink: ['/mesas'] },
                    { label: 'Cozinha',icon: 'fa-solid fa-kitchen-set',routerLink: ['/cozinha'] },
                    { label: 'Pagamento', icon: 'fa-solid fa-money-bills', routerLink: ['/pagamento']}
                ]
            },
        ];
    }
}
