import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {ShoppingListRouting} from "./shopping-list.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ShoppingListRouting,
    ],
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    exports: [],
    providers: []
})
export class ShoppingListModule {
}
