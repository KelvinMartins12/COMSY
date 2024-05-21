import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbModule} from "primeng/breadcrumb";

import {HeaderBreadcrumbComponent} from "../header-breadcrumb.component";

@NgModule({
    declarations: [HeaderBreadcrumbComponent],
    imports: [
        CommonModule,
        BreadcrumbModule,
    ],
    exports: [HeaderBreadcrumbComponent]
})
export class HeaderBreadcrumbModule { }
