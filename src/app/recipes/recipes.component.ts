import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    //console.log("RECIPE: ",recipe);
    // this.recipe=undefined;
    // setTimeout(()=>
    //     this.recipe=recipe,1);
    this.recipe=recipe;
  }
}
