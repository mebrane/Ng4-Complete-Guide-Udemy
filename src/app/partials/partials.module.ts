import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CollapseModule, BsDropdownModule} from "ngx-bootstrap";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,//
    ],
    providers:[]
})
export class PartialsModule {
}
