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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecipeForm2Component } from './recipe-form2/recipe-form2.component';
import {NgArrayPipesModule} from "ngx-pipes";

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule,
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
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeForm2Component,

    ],
    providers:[
        RecipeService
    ]
})
export class RecipesModule {
}
