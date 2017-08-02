import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipe:Recipe;
  constructor(
      private recipeService: RecipeService,
      private slService: ShoppingListService
  ) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
        (recipe:Recipe)=>this.recipe=recipe
    )
  }


  addIngredients(){
    this.slService.addIngredients(this.recipe.ingredients);
  }

}
