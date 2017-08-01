import {Component, OnInit, Input, AfterViewInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit ,OnDestroy{
  initialized:boolean=false;
  destroying=false;
  classes={
    'fadeInLeft':this.initialized,//
    'fadeOutRight':this.destroying
  }
  @Input() recipe:Recipe;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>this.initialized=true,1);
  }
  ngAfterViewInit(){

    // setTimeout(
    //     ()=> this.initialized=true
    //     ,5000);
  }
  ngOnDestroy(){
    this.destroying=true;//
    console.log("Destroying... ",this.recipe);//
  }

}
