import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {ResourceService} from "./resource.service";
import {RecipeService} from "../../recipes/recipe.service";
import 'rxjs/Rx'
import {Recipe} from "../../recipes/recipe.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataStorageService {

    constructor(private http: Http,
                private resSrv: ResourceService,
                private recipeSrv: RecipeService) {
    }

    storeRecipes() {
        return this.http.put(
            this.resSrv.API_URL + "recipes.json",
            this.recipeSrv.getRecipes()
        ).catch(
            (error:Response)=>Observable.throw(error)
        )
    }

    restoreRecipes() {
       return  this.http
            .get(this.resSrv.API_URL + "recipes.json")
            .map(
                (response: Response) => {
                    let recipes = <Recipe[]> response.json()
                    for (let recipe of recipes) {
                        if (!recipe.ingredients) {
                            recipe.ingredients = []
                        }
                    }
                    return recipes
                }
            ).catch(
                (error: Response) => Observable.throw(error)
            )
    }
}
