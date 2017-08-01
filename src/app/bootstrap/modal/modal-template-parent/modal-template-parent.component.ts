import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-template-parent',
  templateUrl: './modal-template-parent.component.html',
  styleUrls: ['./modal-template-parent.component.css']
})
export class ModalTemplateParentComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(
      private modalService:BsModalService
  ) { }

  ngOnInit() {
  }
  onModalShow(tmp:TemplateRef<any>){
    var config = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false
    };
    this.modalRef=this.modalService.show(tmp, Object.assign({
      title:"TITLE FROM PARENT"
    },config));

    // (<ModalOptionsComponent>this.modalRef.content).title="TITLE from PARENT";
    // (<ModalOptionsComponent>this.modalRef.content).list=[
    //   'orange','tomatoe','lettuce','apple'
    // ];
    //
    // console.log("content-parent",this.modalRef.content);//

  }
  onModalHidden(){

  }

}
