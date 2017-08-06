import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Location} from "@angular/common";

@Injectable()
export class RecipeService {

  private recipes:Recipe[]=[
    // new Recipe(
    //     'Recipe 1',
    //     'Recipe 1 Description',
    //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    // ),
    new Recipe(
        2,
        'Recipe 2',
        'Recipe 2 Description',
        'https://s-media-cache-ak0.pinimg.com/736x/3f/4b/88/3f4b882b118bb4c09731e9ef04376521--cooking-grill-grill-recipes.jpg',
        [
            new Ingredient('Ingredient 1 for Recipe 2',22),
            new Ingredient('Ingredient 2 for Recipe 2',23)
        ]
    ),
    new Recipe(
        3,
        'Recipe 3',
        'Recipe 3 Description',
        'https://s-media-cache-ak0.pinimg.com/736x/1e/b9/38/1eb93800c20465052217548c118e26dc--grilled-chicken-recipes-steak-recipes.jpg',
        [
          new Ingredient('Ingredient 1 for Recipe 3',33),
          new Ingredient('Ingredient 2 for Recipe 3',34),
          new Ingredient('Ingredient 3 for Recipe 3',35),
        ]
    ),
    new Recipe(
        4,
        'Recipe 4',
        'Recipe 4 Description',
        'https://s-media-cache-ak0.pinimg.com/736x/16/31/1a/16311a91f952b4accc9315d8bbc1025d--portuguese-recipes-portuguese-food.jpg',
        [
          new Ingredient('Ingredient 1 for Recipe 4',44),
          new Ingredient('Ingredient 2 for Recipe 4',45),
          new Ingredient('Ingredient 3 for Recipe 4',46),
          new Ingredient('Ingredient 4 for Recipe 4',47),
        ]
    )
  ];
  private curId:number
  curIdEvt=new EventEmitter<number>()

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private location:Location) {

  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id:number):Recipe{
      return this.recipes.find(
          (r:Recipe)=> r.id==id
      )
  }

  setCurId(id:number){
      this.curId=id
      this.curIdEvt.emit(this.curId)
  }
  getCurId(){
      return this.curId
  }

  // path = new EventEmitter<string>()
//



}
