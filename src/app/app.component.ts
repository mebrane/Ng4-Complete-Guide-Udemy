import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(
      // private router:Router,
      // private routeModule: RouterModule
  ){

  }
  ngOnInit(){
    //this.router

  }
}
