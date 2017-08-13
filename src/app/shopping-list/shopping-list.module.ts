import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRouting } from './shopping-list.routing';

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
