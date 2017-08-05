import {Injectable, EventEmitter, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient(
            'Apple',
            10,
        ),
        new Ingredient(
            'Tomatoe',
            20,
        ),
        new Ingredient(
            'Orange',
            30,
        ),
        //
        // new Ingredient(
        //     'Lettuce',
        //     40,
        // ),
        // new Ingredient(
        //     'Banana',
        //     Math.floor(Math.random()*100),
        // ),
    ];

    private updateIngredientsList() {
        this.ingredientsChanged.emit(this.ingredients.slice());
        // console.log('Ingredients updated: ',this.ingredients);
    }

    constructor() {
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.updateIngredientsList();
    }

    addIngredients(ingredients: Ingredient[]) {
        //this.ingredients=this.ingredients.concat(ingredients);
        this.ingredients.push(...ingredients);
        this.updateIngredientsList();
    }

    getIngredient(id:number){
        // this.ingredients.find(
        //     (i:Ingredient)=>i.
        // )
    }

}
