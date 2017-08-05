import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, UrlSegment} from "@angular/router";
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  url:string;
  constructor(
      private router:Router,
      private route:ActivatedRoute,
      private sharedSrv:SharedService,
  ) { }

  ngOnInit() {
    // console.log('url',this.route.snapshot.url[0].path);//
    this.route.url.subscribe(
        (url:UrlSegment[])=>{this.url=url[0].path}
    )
  }

  navRandomUrl(){
    this.router.navigate(["/",this.sharedSrv.randStr()]);
  }


}
