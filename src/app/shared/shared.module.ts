import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicHighlightDirective} from './directives/basic-highlight.directive';
import {MessagesComponent} from './messages/messages.component';
import {RouterModule} from "@angular/router";
import {TestingComponent} from "./testing/testing.component";
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [BasicHighlightDirective, MessagesComponent, TestingComponent, PageNotFoundComponent],
    exports: [
        MessagesComponent,
        TestingComponent,
        PageNotFoundComponent,
    ]
})
export class SharedModule {
}
