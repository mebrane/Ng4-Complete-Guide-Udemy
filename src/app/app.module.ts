import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
//Project Modules
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {PartialsModule} from "./partials/partials.module";
import {BootstrapModule} from "./bootstrap/bootstrap.module";
import {RecipesModule} from "./recipes/recipes.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
//Project Components
import {AppComponent} from "./app.component";
import {ProjectComponent} from './root/project/project.component';
//Project Services
import {SharedService} from "./shared/shared.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {ResourceService} from "./shared/services/resource.service";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/services/data-storage.service";
import {Router} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {RecipeService} from "./recipes/recipe.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
        AppComponent,
        ProjectComponent,
        HomeComponent,
    ],
    imports: [

        BrowserModule,
        FormsModule,

        //RecipesModule,
        AuthModule,
        PartialsModule,
        BootstrapModule,

        ShoppingListModule,
        HttpModule,

        //WildcardRoute
        SharedModule,
        AppRoutingModule,

        BrowserAnimationsModule,
    ],
    providers: [
        ShoppingListService,
        SharedService,
        AuthService,
        AuthGuardService,
        ResourceService,
        DataStorageService,
        RecipeService,
    ],
    bootstrap: [AppComponent],

})
export class AppModule {
    constructor(router: Router) {
       // console.log('Routes: ', router.config);
        let routes=router.config
        // for(let route of routes){
        //     console.log(route['path'])
        // }
        console.log(routes)
    }
}
