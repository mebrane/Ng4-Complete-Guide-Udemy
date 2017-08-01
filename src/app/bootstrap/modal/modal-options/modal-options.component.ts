import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css']
})
export class ModalOptionsComponent implements OnInit {

  public title:string;
  public list:any[];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    setTimeout(()=>{this.getParentData()}, 2000);
  }

  private getParentData(){
    var content=(<ModalOptionsComponent>this.bsModalRef.content);
    this.title=content.title;
    console.log("content-from-Init",content);
  }

  onModalAction(el:HTMLInputElement){
    console.log("content-options",this.bsModalRef.content);
    console.log("title",this.title);
    console.log('list',this.list);//
    //console.log("element",el.value);
  }

}
