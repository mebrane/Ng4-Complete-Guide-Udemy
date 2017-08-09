import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    editMode = false
    ingredientIndex: number
    ingredientSelected: Ingredient
    @ViewChild('f') ngform: NgForm

    constructor(private slService: ShoppingListService) {
    }

    ngOnInit() {
        this.slService.ingredientSelectedEvt.subscribe(
            (index: number) => {
                this.onEditMode(index)
            }
        )
    }

    onSubmit() {
        if (!this.editMode) {
            this.onAdd()
        } else {
            this.onUpdate()
        }
        this.onClear()
    }

    private onAdd() {
        const ingredient: Ingredient = <Ingredient>this.ngform.value
        this.slService.addIngredient(ingredient)
    }

    private onEditMode(index: number) {
        this.ingredientIndex = index
        this.editMode = true
        this.ingredientSelected = this.slService.getIngredient(this.ingredientIndex)
        this.ngform.setValue(this.ingredientSelected)
    }


    private onUpdate() {
        this.slService.updateIngredient(this.ingredientIndex, this.ngform.value)
    }

    onDelete() {
        this.slService.deleteIngredient(this.ingredientIndex)
        this.onClear()
    }

    onClear() {
        this.editMode = false
        this.ngform.reset()
    }
}
