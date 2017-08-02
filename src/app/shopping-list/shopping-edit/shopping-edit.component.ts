import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() ingredientAdd = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f);
  }

  addIngredient(){
    const ingName=this.nameInput.nativeElement.value.trim();
    const ingAmount=this.amountInput.nativeElement.value.trim();

    if(ingName!="" && ingAmount!=""){
      const ingredient=new Ingredient(ingName,  ingAmount);

      // this.ingredientAdd.emit(ingredient);
      this.shoppingListService.addIngredient(ingredient);

      this.clearIngredient();

    }


  }

  clearIngredient(){
    this.nameInput.nativeElement.value="";
    this.amountInput.nativeElement.value="";
  }
}
