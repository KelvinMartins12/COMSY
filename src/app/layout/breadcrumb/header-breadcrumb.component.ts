import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {HomeIcon} from "primeng/icons/home";

@Component({
    selector: 'header-breadcrumb',
    templateUrl: './header-breadcrumb.component.html',
})
export class HeaderBreadcrumbComponent {

    @Input() breadcrumbItems: MenuItem[];
    @Input() home: {label: HomeIcon, url :'/'};
}
