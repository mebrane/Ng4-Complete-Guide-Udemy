import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataModel} from "../models/data.model";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  @Input('data')
  data:DataModel;

  defaultMessage:string= "Loading message...";
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

   this.getRouteData();
  }

  getRouteData(){
    let data=<DataModel> this.route.snapshot.data;
    if(data.type){
      this.data=data;
      this.route.data.subscribe(
          (data:DataModel)=>{
            this.data=data;
            // console.log(this.data);//
          }
      )
    }
  }

}
