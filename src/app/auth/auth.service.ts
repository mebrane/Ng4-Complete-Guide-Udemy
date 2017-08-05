import { Injectable } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Injectable()
export class AuthService {

  auth:boolean=false
  afterLoginPath="/"

  constructor(
      private router:Router,
      private route:ActivatedRoute,
  ) { }

  logged():boolean{
    return this.auth;
  }

  login(){
    this.auth=true;
    // this.router.navigate(["/"])
  }

  logout(path:string){
     // console.log("url",this.route.snapshot.url)
    this.auth=false;
    this.afterLoginPath=path
    // console.log("path",path);//
    this.router.navigate(["login"])//
  }
}
