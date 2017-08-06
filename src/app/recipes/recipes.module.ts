import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {BsDropdownModule} from "ngx-bootstrap";
import {RecipeService} from "./recipe.service";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule,
        SharedModule,
        FormsModule,
    ],

    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeFormComponent,

    ],
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeFormComponent,

    ],
    providers:[
        RecipeService
    ]
})
export class RecipesModule {
}
