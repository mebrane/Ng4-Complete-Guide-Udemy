import { AlertModule } from 'ngx-bootstrap/alert';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { CommonModule } from '@angular/common';
import { FormsCustomMessageComponent } from './forms/forms-custom-message/forms-custom-message.component';
import { FormsMessagesComponent } from './forms/forms-messages/forms-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { Route, RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';


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
