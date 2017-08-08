import {Component, OnInit, Input} from '@angular/core';
import {ErrorCollector} from "@angular/compiler";
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-forms-messages',
  templateUrl: './forms-messages.component.html',
  styleUrls: ['./forms-messages.component.css']
})
export class FormsMessagesComponent implements OnInit {



  @Input('ctrl') ctrl:FormControl
  @Input('field') field : string
  @Input('json') json?:boolean=false
  // errors:any

  constructor() {

  }

  ngOnInit() {
    // this.errors=this.ctrl.errors//
  }

}
