import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {MessagesComponent} from "./shared/messages/messages.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";
import {AuthComponent} from "./auth/auth/auth.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
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
                path: ':id',
                component: RecipeDetailComponent,
                data: {
                    name: "recipes.detail"
                }
            }, {
                path: ':id/edit',
                component: RecipeEditComponent,
                data: {
                    name: "recipes.edit"
                }
            },
        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        canActivate: [AuthGuardService],
        data: {
            name: "shopping-list"
        }
    },
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthComponent,
    },
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
