import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    recipe: Recipe;

    constructor(private recipeSrv: RecipeService, private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

}
