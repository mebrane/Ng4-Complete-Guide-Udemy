import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BootstrapComponent} from './bootstrap.component';
import {Datepicker1Component} from "./datepicker/datepicker1/datepicker1.component";
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [
        CommonModule,
        DatepickerModule.forRoot(),
        FormsModule,
    ],
    declarations: [
        BootstrapComponent,
        Datepicker1Component
    ]
})
export class BootstrapModule {
}
