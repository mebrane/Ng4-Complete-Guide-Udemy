import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params} from "@angular/router";
import {DataModel} from "../../shared/data.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipe:Recipe;
  constructor(
      private recipeService: RecipeService,
      private slService: ShoppingListService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id:number=+this.route.snapshot.params['id'];
    this.recipe=this.recipeService.getRecipe(id);

    this.route.params.subscribe(
        (params: Params) => {
          let id:number= +params['id'];
          this.recipe=this.recipeService.getRecipe(id);
        }
    )

  }

  addIngredients(){
    this.slService.addIngredients(this.recipe.ingredients);
  }

  recipeNotFound:DataModel={
    type:'warning',
    message: "Recipe Not Found"
  };

}
