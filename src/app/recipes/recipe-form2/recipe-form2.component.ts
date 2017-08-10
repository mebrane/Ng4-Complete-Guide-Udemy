import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {FormGroup, FormControl, FormArray, Validator, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
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

    constructor(private route: ActivatedRoute, private recipeSrv: RecipeService, private router: Router) {
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
            'name': new FormControl(null, [Validators.required]),
            'description': new FormControl(null, [Validators.required]),
            'imagePath': new FormControl(null, [Validators.required]),
            'ingredients': new FormArray([])
        })

        this.recipeId = +params['id']
        this.editMode = params['id'] != null

        if (this.editMode) {
            this.onEditMode()
        }
    }

    private onEditMode() {
        this.recipe = this.recipeSrv.getRecipe(this.recipeId)
        if (this.recipe) {

            this.rctform.patchValue({
                'name': this.recipe.name,
                'description': this.recipe.description,
                'imagePath': this.recipe.imagePath,
            })

            if (this.recipe.ingredients) {
                this.patchIngredients()
            }
        }
    }

    private ingredientsValidators = {
        'name': [
            Validators.required,
        ],
        'amount': [
            Validators.required,
            Validators.pattern('^[0-9]*[1-9][0-9]*$'),
        ]
    }

    private patchIngredients() {
        let ingredientsArr = (<FormArray>this.rctform.get('ingredients'));

        for (let ingredient of this.recipe.ingredients) {
            let nameCtrl = new FormControl(ingredient.name,
                this.ingredientsValidators.name,
            )
            let amountCtrl = new FormControl(ingredient.amount,
                this.ingredientsValidators.amount,
            );

            ingredientsArr.push(
                new FormGroup({
                        'name': nameCtrl,
                        'amount': amountCtrl,
                    }
                ))
        }
    }

    addIngredientCtrl() {
        (<FormArray>this.rctform.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(null,
                    this.ingredientsValidators.name,
                ),
                'amount': new FormControl(null,
                    this.ingredientsValidators.amount
                ),
            })
        )
    }

    deleteIngredientCtrl(index: number) {
        (<FormArray>this.rctform.get('ingredients')).removeAt(index)
        // console.log('index', index);
    }

    onSubmit() {
        // let recipe=new Recipe(0,
        //     this.rctform.value['name'],
        //     this.rctform.value['description'],
        //     this.rctform.value['imagePath'],
        //     this.rctform.value['ingredients'],
        // )
        let recipe: Recipe = this.rctform.value
        recipe.id = this.recipeId
        if (this.editMode) {
            this.recipeSrv.updateRecipe(this.recipeId, recipe)
            this.router.navigate(['../'], {relativeTo: this.route})

        } else {
            let id = this.recipeSrv.createRecipe(recipe)
            this.router.navigate(['../', id], {relativeTo: this.route})
        }

        //this.router.navigate(['../'],{relativeTo: this.route})
        //  console.log("recipe",recipe)
    }

    onCancel() {
        this.router.navigate(['../'],{relativeTo:this.route})
    }
}
