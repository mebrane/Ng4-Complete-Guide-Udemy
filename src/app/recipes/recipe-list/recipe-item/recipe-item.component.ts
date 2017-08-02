import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  //@Output
  constructor(
      private recipeService:RecipeService
  ) { }

  ngOnInit() {
    //console.log(recipe);
  }
  onItemSelect(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
