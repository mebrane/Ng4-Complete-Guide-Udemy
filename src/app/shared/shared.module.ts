import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasicHighlightDirective]
})
export class SharedModule { }
