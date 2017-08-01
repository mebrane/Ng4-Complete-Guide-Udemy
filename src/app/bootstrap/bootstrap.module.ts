import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BootstrapComponent} from './bootstrap.component';
import {Datepicker1Component} from "./datepicker/datepicker1/datepicker1.component";
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap";

import {BsModalRef} from "ngx-bootstrap/modal";
import { ModalParentComponent } from './modal/modal-parent/modal-parent.component';
import { ModalOptionsComponent } from './modal/modal-options/modal-options.component';
import { ModalTemplateOptionsComponent } from './modal/modal-template-options/modal-template-options.component';
import { ModalTemplateParentComponent } from './modal/modal-template-parent/modal-template-parent.component';
import { ModalDirParentComponent } from './modal/modal-dir-parent/modal-dir-parent.component';
import { ModalDirOptComponent } from './modal/modal-dir-opt/modal-dir-opt.component';
@NgModule({
    imports: [
        CommonModule,
        DatepickerModule.forRoot(),
        FormsModule,
        ModalModule.forRoot(),
    ],
    declarations: [
        BootstrapComponent,
        Datepicker1Component,
        ModalParentComponent,
        ModalOptionsComponent,
        ModalTemplateOptionsComponent,
        ModalTemplateParentComponent,
        ModalDirParentComponent,
        ModalDirOptComponent,

    ],
    exports:[
        BootstrapComponent,
        // ComponentModalComponentComponent
    ],
    providers:[BsModalRef],
    entryComponents:[ModalDirOptComponent]
})
export class BootstrapModule {
}
