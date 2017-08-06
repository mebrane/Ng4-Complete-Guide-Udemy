import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe: Recipe
  editMode:boolean
  title:string
  desc:string

  private initNewMode(){
    this.editMode=false
    this.recipe=new Recipe(0,'','','',[])
    this.title="New Recipe"
    this.desc="Add a new recipe"
  }

  private initEditMode(params:Params){
    this.editMode=true;
    let id = +params["id"]
    this.recipe = this.recipeSrv.getRecipe(id)
    this.route.params.subscribe(
        (params: Params) => {
          this.recipe = this.recipeSrv.getRecipe(+params["id"])
        }
    )
    this.title="Edit Recipe"
    this.desc=`Editing recipe`//
  }

  constructor(private route: ActivatedRoute, private recipeSrv: RecipeService) {
  }

  ngOnInit() {
    let params=this.route.snapshot.params;
    if("id" in params){
      this.initEditMode(params)
    }else{
      this.initNewMode()
    }

  }




}
