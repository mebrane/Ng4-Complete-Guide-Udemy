import { BsDropdownModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgArrayPipesModule } from 'ngx-pipes';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeForm2Component } from './recipe-form2/recipe-form2.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeService } from './recipe.service';
import { RecipesRouting } from './recipes.routing';
import { SharedModule } from '../shared/shared.module';

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
        // RecipeService
    ]
})
export class RecipesModule {
}
