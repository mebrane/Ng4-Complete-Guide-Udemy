import {Injectable, EventEmitter,} from '@angular/core'
import {Ingredient} from "../shared/ingredient.model"

@Injectable()
export class ShoppingListService {

    ingredientsChangedEvt = new EventEmitter<Ingredient[]>();
    ingredientSelectedEvt = new EventEmitter<number>()

    private ingredients: Ingredient[] = [
        new Ingredient(
            'Apple',
            10,
        ),
        new Ingredient(
            'Tomatoe',
            20,
        ),
        // new Ingredient(
        //     'Orange',
        //     30,
        // ),
        //
        // new Ingredient(
        //     'Lettuce',
        //     40,
        // ),
        new Ingredient(
            'Banana',
            Math.floor(Math.random() * 100),
        ),
    ];

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
        this.ingredients.push(...ingredients);
        this.updateIngredientsList();
    }

    getIngredient(index: number) {
        return this.ingredients[index]
    }

    selectIngredient(index: number) {
        this.ingredientSelectedEvt.emit(index)
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        //console.log(index, ingredient)
        this.ingredients[index] = ingredient
        this.updateIngredientsList()
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1)
        this.updateIngredientsList()
    }

    private updateIngredientsList() {
        this.ingredientsChangedEvt.emit(this.ingredients.slice());
    }

}

