import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-forms-custom-message',
  templateUrl: './forms-custom-message.component.html',
  styleUrls: ['./forms-custom-message.component.css']
})
export class FormsCustomMessageComponent implements OnInit {

  @Input('ctrl') ctrl:FormControl
  @Input('error') error:string
  @Input('msg') msg: string

  constructor() { }

  ngOnInit() {
  }

}
