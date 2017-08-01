import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
      // new Recipe(
      //     'Recipe 1',
      //     'Recipe 1 Description',
      //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
      // ),
      new Recipe(
          'Recipe 2',
          'Recipe 2 Description',
          'https://s-media-cache-ak0.pinimg.com/736x/3f/4b/88/3f4b882b118bb4c09731e9ef04376521--cooking-grill-grill-recipes.jpg'
      ),
      new Recipe(
          'Recipe 3',
          'Recipe 3 Description',
          'https://s-media-cache-ak0.pinimg.com/736x/1e/b9/38/1eb93800c20465052217548c118e26dc--grilled-chicken-recipes-steak-recipes.jpg'
      ),
      new Recipe(
          'Recipe 4',
          'Recipe 4 Description',
          'https://s-media-cache-ak0.pinimg.com/736x/16/31/1a/16311a91f952b4accc9315d8bbc1025d--portuguese-recipes-portuguese-food.jpg'
      )
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onItemSelect(recipe:Recipe){
      //console.log(recipe);//
      this.recipeSelected.emit(recipe);
  }
}
