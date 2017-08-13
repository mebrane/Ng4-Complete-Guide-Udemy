import { AuthComponent } from './auth/auth.component';
import { AuthRouting } from './auth.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
