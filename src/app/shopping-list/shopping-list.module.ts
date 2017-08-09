import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
//import {ShoppingListService} from "./shopping-list.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    providers: [
        // ShoppingListService
    ]
})
export class ShoppingListModule {
}
