import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataStorageService } from './shared/services/data-storage.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { PartialsModule } from './partials/partials.module';
import { ProjectComponent } from './root/project/project.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipesModule } from './recipes/recipes.module';
import { ResourceService } from './shared/services/resource.service';
import { Router } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared/shared.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
// Project Modules
// Project Components
// Project Services


@NgModule({
    declarations: [
        AppComponent,
        ProjectComponent,
        HomeComponent,
    ],
    imports: [

        BrowserModule,
        FormsModule,

        // RecipesModule,
        AuthModule,
        PartialsModule,
        BootstrapModule,

        ShoppingListModule,
        HttpModule,

        // WildcardRoute
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
        const routes = router.config
        // for(let route of routes){
        //     console.log(route['path'])
        // }
        console.log(routes)
    }
}
