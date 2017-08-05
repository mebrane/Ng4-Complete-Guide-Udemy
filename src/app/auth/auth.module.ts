import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
      RouterModule,
  ],
  declarations: [AuthComponent],
  exports:[AuthComponent]
})
export class AuthModule { }
