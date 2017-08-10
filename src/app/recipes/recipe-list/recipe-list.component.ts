import {Component, OnInit, OnDestroy} from '@angular/core'
import {Recipe} from "../recipe.model"
import {RecipeService} from "../recipe.service"
import {Subscription} from "rxjs";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    subscription:Subscription

    constructor(private recipeService: RecipeService,) {
    }

    ngOnInit() {
        this.getRecipes()
        this.subscription=this.recipeService.recipeListUpdatedEvt.subscribe(
            (recipes:Recipe[])=>{
                this.getRecipes()
            }
        )
    }
    getRecipes(){
        this.recipes = this.recipeService.getRecipes()
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
    }
}
