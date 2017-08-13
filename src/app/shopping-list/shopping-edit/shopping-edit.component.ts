import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
    } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    isSubs: Subscription
    editMode = false
    ingredientIndex: number
    ingredientSelected: Ingredient
    @ViewChild('f') ngform: NgForm

    constructor(private slService: ShoppingListService) {

    }

    ngOnInit() {
        this.isSubs = this.slService.ingredientSelectedEvt.subscribe(
            (index: number) => {
                this.onEditMode(index)
            }
        )
    }

    ngOnDestroy() {
        this.isSubs.unsubscribe()
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
        // this.ngform.setValue({
        //         'name': this.ingredientSelected.name,
        //         'amount': this.ingredientSelected.amount
        //     }
        // )
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
