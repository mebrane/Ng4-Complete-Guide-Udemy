import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Response} from "@angular/http";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[];

    constructor(private slSrv: ShoppingListService) {
    }

    ngOnInit() {
        this.slSrv.ingredientsChangedEvt.subscribe(
            () => {
                this.getIngredients()
            }
        )
        this.getIngredients()
    }

    getIngredients() {
        this.ingredients = this.slSrv.getIngredients();
    }

    onSelectIngredient(index: number) {
        this.slSrv.selectIngredient(index)
    }




}
