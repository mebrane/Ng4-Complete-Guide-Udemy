import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";
import {AuthComponent} from "./auth/auth/auth.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {TestingComponent} from "./shared/testing/testing.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/recipes',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component:HomeComponent,
        // pathMatch: 'full'
        canActivate:[AuthGuardService],
    },
    {
      path: "recipes",
        loadChildren:"./recipes/recipes.module#RecipesModule",
        canLoad: [AuthGuardService],
    },
    {
        path:'testing',
        component: TestingComponent,
    },
     {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
