import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CollapseModule, BsDropdownModule} from "ngx-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
})
export class PartialsModule {
}
