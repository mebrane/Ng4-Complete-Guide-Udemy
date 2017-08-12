import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import {Response} from "@angular/http";
import {Ingredient} from "../shared/models/ingredient.model";
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    animations: [
        trigger("list1", [
            state("in", style({
                opacity: 1,
                transform: "translateX(0)",
            })),
            transition("void => *", [
                style({
                    opacity: 0,
                    transform: "translateX(-100px)",
                }),
                animate(300),
            ]),
            transition("* => void", [
                animate(500, style({
                    // color:"white",
                    // backgroundColor:"white",
                    opacity: 0,
                    transform:"translateX(100px)"
                }),),
            ])
        ])
    ]
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[];
    error
    ingredientName:string

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
        this.ingredientName=this.slSrv.getIngredient(index).name
    }


}
