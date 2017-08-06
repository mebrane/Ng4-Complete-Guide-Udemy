import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";//

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {

    @Input() recipe: Recipe;
    itemSelected: boolean

    constructor(private recipeService: RecipeService,) {
    }

    ngOnInit() {
        this.itemSelected = (this.recipe.id == this.recipeService.getCurId())
        this.recipeService.curIdEvt.subscribe(
            (id: number) => {
                this.itemSelected = (this.recipe.id == id)
            }
        )
    }


}
