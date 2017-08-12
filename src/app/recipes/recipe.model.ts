
import {Ingredient} from "../shared/models/ingredient.model";
export class Recipe  {
    id:number;
    name:string;
    description:string;
    imagePath:string;
    ingredients:Ingredient[];

    constructor(id:number,nm:string, dsc:string,img:string,ingredients:Ingredient[]){
        this.id=id;
        this.name=nm;
        this.description=dsc;
        this.imagePath=img;
        this.ingredients=ingredients;
    }

}
