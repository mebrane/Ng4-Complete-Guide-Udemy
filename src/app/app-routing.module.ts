import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";
import {AuthComponent} from "./auth/auth/auth.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {TestingComponent} from "./shared/testing/testing.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
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
