import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  exports:[
    ShoppingListComponent,
    ShoppingEditComponent
  ]
})
export class ShoppingListModule { }
