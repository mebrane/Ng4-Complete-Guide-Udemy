import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.shoppingListService.ingredientsChangedEvt.subscribe(
            () => {
                this.getIngredients()
            }
        )
        this.getIngredients();
    }

    getIngredients() {
        this.ingredients = this.shoppingListService.getIngredients();
    }

    onSelectIngredient(index: number) {
        this.shoppingListService.selectIngredient(index)
    }


}
