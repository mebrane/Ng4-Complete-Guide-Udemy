import { Ingredient } from '../shared/models/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService {

    recipeListUpdatedEvt = new Subject<Recipe[]>()

    private recipes: Recipe[] = [
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
                new Ingredient('Ingredient 1 for Recipe 2', 22),
                new Ingredient('Ingredient 2 for Recipe 2', 23)
            ]
        ),
        new Recipe(
            3,
            'Recipe 3',
            'Recipe 3 Description',
            'https://s-media-cache-ak0.pinimg.com/736x/1e/b9/38/1eb93800c20465052217548c118e26dc--grilled-chicken-recipes-steak-recipes.jpg',
            [
                new Ingredient('Ingredient 1 for Recipe 3', 33),
                new Ingredient('Ingredient 2 for Recipe 3', 34),
                new Ingredient('Ingredient 3 for Recipe 3', 35),
            ]
        ),
        new Recipe(
            4,
            'Recipe 4',
            'Recipe 4 Description',
            'https://s-media-cache-ak0.pinimg.com/736x/16/31/1a/16311a91f952b4accc9315d8bbc1025d--portuguese-recipes-portuguese-food.jpg',
            [
                new Ingredient('Ingredient 1 for Recipe 4', 44),
                new Ingredient('Ingredient 2 for Recipe 4', 45),
                new Ingredient('Ingredient 3 for Recipe 4', 46),
                new Ingredient('Ingredient 4 for Recipe 4', 47),
            ]
        )
    ];

    constructor() {

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.onRecipeListUpdated()
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number): Recipe {
        return this.recipes.find(
            (r: Recipe) => r.id === id
        )
    }

    createRecipe(recipe: Recipe): number {
        const length = this.recipes.length
        const lastRecipe = this.recipes[length - 1]
        recipe.id = lastRecipe.id + 1
        this.recipes.push(recipe)
        // console.log("new Recipe",recipe)
        this.onRecipeListUpdated()
        return recipe.id
    }

    updateRecipe(id: number, recipe: Recipe) {

        const index = this.recipes.findIndex(
            (r: Recipe) => r.id === id
        )
        // let _recipe=this.getRecipe(id)

        if (index > -1) {
            recipe.id = id
            this.recipes[index] = recipe;
            console.log('recipe Updated', index, recipe)
        } else {
            console.log(`Recipe id:${id} index:${index} not found`)
        }
        this.onRecipeListUpdated()
    }

    private onRecipeListUpdated() {
        this.recipeListUpdatedEvt.next(this.recipes.slice())
    }

    deleteRecipe(id: number) {
        const index = this.recipes.findIndex(
            (r: Recipe) => r.id === id
        )
        if (index > -1) {
            this.recipes.splice(index, 1)
        } else {
            console.log('Recipe not found')
        }

        this.onRecipeListUpdated()
    }

}
