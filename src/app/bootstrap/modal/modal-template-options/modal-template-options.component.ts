import {Component, OnInit, Input} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-template-options',
  templateUrl: './modal-template-options.component.html',
  styleUrls: ['./modal-template-options.component.css']
})
export class ModalTemplateOptionsComponent implements OnInit {

  @Input() modalRef:BsModalRef;

  public title:string;
  public list:any[];

  constructor() { }

  ngOnInit() {
    // setTimeout(()=>{this.getParentData()}, 2000);
  }

  // private getParentData(){
  //   var content=(<ModalOptionsComponent>this.bsModalRef.content);
  //   this.title=content.title;
  //   console.log("content-from-Init",content);
  // }

  onModalAction(el:HTMLInputElement){
    // console.log("content-options",this.bsModalRef.content);
    // console.log("title",this.title);
    // console.log('list',this.list);//
    //console.log("element",el.value);
  }

}
