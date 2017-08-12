import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {AuthRouting} from "./auth.routing";

@NgModule({
    imports: [
        CommonModule,
        AuthRouting,
    ],
    declarations: [AuthComponent],
    exports: []
})
export class AuthModule {
}
