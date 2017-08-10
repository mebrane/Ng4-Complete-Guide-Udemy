import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {FormGroup, FormControl, FormArray} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-form2',
    templateUrl: './recipe-form2.component.html',
    styleUrls: ['./recipe-form2.component.css']
})
export class RecipeForm2Component implements OnInit {

    recipeId: number
    recipe: Recipe
    editMode: boolean
    rctform: FormGroup
    imgDefault = 'http://i.imgur.com/zFpiRqK.png'

    constructor(private route: ActivatedRoute, private recipeSrv: RecipeService) {
    }

    ngOnInit() {

        let params = this.route.snapshot.params
        this.initForm(params)

        this.route.params.subscribe(
            (params: Params) => {
                this.initForm(params)
            }
        )

    }

    private initForm(params: Params) {
        this.rctform = new FormGroup({
            'name': new FormControl(null, []),
            'description': new FormControl(null, []),
            'imagePath': new FormControl(null, []),
            'ingredients': new FormArray([])
        })

        this.recipeId = +params['id']
        this.editMode = params['id'] != null

        if (this.editMode) {
            this.fillForm(this.recipeId)
        }
    }

    private fillForm(id: number) {
        this.recipe = this.recipeSrv.getRecipe(id)

        if (this.recipe) {
            let name = this.recipe.name
            let desc = this.recipe.description
            let imgPath = this.recipe.imagePath
            let ingredients:FormArray = new FormArray([])

            if (this.recipe.ingredients) {
                for (let ingredient of this.recipe.ingredients) {

                    let nameCtrl = new FormControl(ingredient.name)
                    let amountCtrl = new FormControl(ingredient.amount)

                    ingredients.push(new FormGroup({
                            'name': nameCtrl,
                            'amount': amountCtrl,
                        }
                    ))
                }
            }

            this.rctform= new FormGroup({
                'name': new FormControl(name),
                'description': new FormControl(desc),
                'imagePath': new FormControl(imgPath),
                'ingredients': ingredients
            })

        }

    }

    onSubmit() {
        console.log(this.rctform)
    }

}
