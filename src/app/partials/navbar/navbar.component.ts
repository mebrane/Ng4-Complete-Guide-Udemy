import {Component, OnInit,} from '@angular/core'
import {Router, ActivatedRoute, Event} from "@angular/router"
import {SharedService} from "../../shared/shared.service"
import {AuthService} from "../../auth/auth.service"
import {DataStorageService} from "../../shared/services/data-storage.service";
import {Response} from "@angular/http";
import {Recipe} from "../../recipes/recipe.model";
import {RecipeService} from "../../recipes/recipe.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

    currentUrl: string = ""

    constructor(private router: Router,
                private sharedSrv: SharedService,
                private authSrv: AuthService,
                private dsSrv: DataStorageService,
                private recipeSrv: RecipeService,) {
    }

    loggedIn: boolean;

    ngOnInit() {

        this.router.events.subscribe((event: Event) => {
            this.currentUrl = event["url"]
        })

        this.authSrv.authEvent.subscribe(
            (logged: boolean) => {
                this.loggedIn = logged
            }
        )
    }

    randomUrl() {
        this.router.navigate(['/', this.sharedSrv.randStr()]);
    }

    logout() {
        this.authSrv.logout()
    }

    setRecipes() {
        this.dsSrv.storeRecipes().subscribe(
            (response: Response) => console.log("success", response),
            (error: Response) => console.log("error", error)
        )
    }

    getRecipes() {
        this.dsSrv.restoreRecipes().subscribe(
            (recipes: Recipe[]) => {
                this.recipeSrv.setRecipes(recipes)
                console.log("success", recipes)
            },
            (error: Response) => console.log("error", error)
        )
    }
}
