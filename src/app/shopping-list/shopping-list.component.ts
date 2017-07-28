import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient(
          'Apple',
        10,
    ),
    new Ingredient(
        'Tomatoe',
        20,
    ),
    new Ingredient(
        'Orange',
        30,
    ),
    new Ingredient(
        'Lettuce',
        40,
    ),
    new Ingredient(
        'Banana',
        Math.floor(Math.random()*100),
    ),
  ];


  constructor() { }

  ngOnInit() {
    this.ingredients.sort(
        () => .5 - Math.random()
    );
  }

}
