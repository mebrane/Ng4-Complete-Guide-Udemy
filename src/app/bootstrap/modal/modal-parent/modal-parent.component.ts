import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {ModalOptionsComponent} from "../modal-options/modal-options.component";

@Component({
  selector: 'app-modal-parent',
  templateUrl: './modal-parent.component.html',
  styleUrls: ['./modal-parent.component.css']
})
export class ModalParentComponent implements OnInit {
  public modalRef: BsModalRef;
  public config = {
    animated: false,
    keyboard: false,
    backdrop: false,
    ignoreBackdropClick: true
  };
  constructor(
      private modalService:BsModalService
  ) { }

  ngOnInit() {
  }
  onModalShow(){
    this.modalRef=this.modalService.show(ModalOptionsComponent);
    (<ModalOptionsComponent>this.modalRef.content).title="TITLE from PARENT";
    (<ModalOptionsComponent>this.modalRef.content).list=[
        'orange','tomatoe','lettuce','apple'
    ];

    console.log("content-parent",this.modalRef.content);//

  }
  onModalHidden(){

  }

}
