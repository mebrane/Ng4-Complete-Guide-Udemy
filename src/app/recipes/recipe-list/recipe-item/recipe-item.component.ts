import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  //@Output
  constructor() { }

  ngOnInit() {
    //console.log(recipe);
  }
  onItemSelect(){

  }

}
