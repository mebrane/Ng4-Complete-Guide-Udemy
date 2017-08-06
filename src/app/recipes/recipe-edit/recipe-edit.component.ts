import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

    recipe: Recipe

    constructor(private route: ActivatedRoute, private recipeSrv: RecipeService) {
    }

    ngOnInit() {
        let id=+this.route.snapshot.params["id"]
        this.recipe = this.recipeSrv.getRecipe(id)
        console.log("recipe",this.recipe)
        this.route.params.subscribe(
            (params: Params) => {
               // console.log("id",params["id"])
                this.recipe = this.recipeSrv.getRecipe(+params["id"])
                // console.log("recipe",this.recipe)
            }
        )
    }

}
