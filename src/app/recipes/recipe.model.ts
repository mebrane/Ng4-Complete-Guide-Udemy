
import {Ingredient} from "../shared/ingredient.model";
export class Recipe  {
    name:string;
    description:string;
    imagePath:string;
    ingredients:Ingredient[];

    constructor(nm:string, dsc:string,img:string,ingredients:Ingredient[]){
        this.name=nm;
        this.description=dsc;
        this.imagePath=img;
        this.ingredients=ingredients;
    }

}
