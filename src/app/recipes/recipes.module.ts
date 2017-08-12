import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {BsDropdownModule} from "ngx-bootstrap";
import {RecipeService} from "./recipe.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipeForm2Component} from './recipe-form2/recipe-form2.component';
import {NgArrayPipesModule} from "ngx-pipes";
import {RecipesRouting} from "./recipes.routing";

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RecipesRouting,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgArrayPipesModule,
    ],

    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeForm2Component,

    ],
    exports: [],
    providers: [
        RecipeService
    ]
})
export class RecipesModule {
}
