import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicHighlightDirective} from './directives/basic-highlight.directive';
import {MessagesComponent} from './messages/messages.component';
import {RouterModule, Route, Routes} from "@angular/router";
import {TestingComponent} from "./testing/testing.component";
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertModule} from 'ngx-bootstrap/alert';
import {FormsMessagesComponent} from './forms/forms-messages/forms-messages.component';
import { FormsCustomMessageComponent } from './forms/forms-custom-message/forms-custom-message.component';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
    ],
    declarations: [
        BasicHighlightDirective,
        MessagesComponent,
        TestingComponent,
        PageNotFoundComponent,
        FormsMessagesComponent,
        FormsCustomMessageComponent,
        ReversePipe
    ],
    exports: [
        MessagesComponent,
        TestingComponent,
        PageNotFoundComponent,
        ReversePipe,
    ]
})
export class SharedModule {
}
