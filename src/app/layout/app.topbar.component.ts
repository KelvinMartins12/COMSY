import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {color} from "chart.js/helpers";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{
    breadcrumbItems: any[];
    home = {icon: 'pi pi-home'}
    constructor(public layoutService: LayoutService,private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbItems = this.getBreadcrumbItems(event.urlAfterRedirects);
            }
        });
    }

    getBreadcrumbItems(url: string): any[] {
        const breadcrumbItems = [];
        const urlSegments = url.split('/');

        urlSegments.forEach((segment, index) => {

            if  (index == 0 ){

                breadcrumbItems.push({icon:'fas fa-home',routerLink:['/']})
            }
            if (index > 0 && segment !== '') {
                breadcrumbItems.push({ label: segment, routerLink: ['/' + urlSegments.slice(0, index + 1).join('/')] });
            }
        });
        return breadcrumbItems;
    }

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;


    protected readonly color = color;
}
