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
import { ProjectComponent } from './root/project/project.component';
//Project Services
import {SharedService} from "./shared/shared.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {NgArrayPipesModule} from "ngx-pipes";
import {ResourceService} from "./shared/services/resource.service";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/services/data-storage.service";


@NgModule({
    declarations: [
        AppComponent,
        ProjectComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        AuthModule,
        SharedModule,
        PartialsModule,
        BootstrapModule,
        RecipesModule,
        ShoppingListModule,
        HttpModule,
        // NgArrayPipesModule,

    ],
    providers: [
        ShoppingListService,
        SharedService,
        AuthService,
        AuthGuardService,
        ResourceService,
        DataStorageService,
    ],
    bootstrap: [AppComponent],

})
export class AppModule {
    // constructor(router: Router) {
    //     console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    // }
}
