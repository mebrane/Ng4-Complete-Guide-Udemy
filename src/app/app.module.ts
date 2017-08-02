import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {PartialsModule} from "./partials/partials.module";
import {BootstrapModule} from "./bootstrap/bootstrap.module";
import {RecipesModule} from "./recipes/recipes.module";

import {RootComponent} from './root/root.component';
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {SharedModule} from "./shared/shared.module";
import { ProjectComponent } from './root/project/project.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@NgModule({
    declarations: [
        RootComponent,
        ProjectComponent,
        // ComponentModalComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        PartialsModule,
        BootstrapModule,
        RecipesModule,
        ShoppingListModule
    ],
    providers: [ ShoppingListService],
    bootstrap: [RootComponent]
})
export class AppModule {
}
