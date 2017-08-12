import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "../auth/auth-guard.service";
import {RecipesComponent} from "./recipes.component";
import {MessagesComponent} from "../shared/messages/messages.component";
import {RecipeForm2Component} from "./recipe-form2/recipe-form2.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

const routes: Routes = [
    {
        path: 'recipes',
        data: {
            name: 'recipes'
        },
        canActivate: [AuthGuardService],
        component: RecipesComponent,
        children: [
            {
                path: '',
                component: MessagesComponent,
                data: {
                    type: 'info',
                    message: "Select a Recipe"
                }
            },
            {
                path: 'new-recipe',
                component: RecipeForm2Component,
                data: {
                    name: "recipes.new"
                }
            },
            {
                path: ':id',
                component: RecipeDetailComponent,
                data: {
                    name: "recipes.detail"
                }
            }, {
                path: ':id/edit',
                component: RecipeForm2Component,
                data: {
                    name: "recipes.edit"
                }
            },
        ]
    },
]
export const RecipesRouting = RouterModule.forChild(routes);