import {Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
    recipe: Recipe;

    constructor(private recipeSrv: RecipeService, private route: ActivatedRoute) {
    }
    ngOnInit() {

    }
    ngOnDestroy() {
        this.recipeSrv.setCurId(0)
    }
}
