import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-modal-dir-parent',
  templateUrl: './modal-dir-parent.component.html',
  styleUrls: ['./modal-dir-parent.component.css']
})
export class ModalDirParentComponent implements OnInit {
  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  modalData={
    content:{
      title:"TITLE from MODAL DIR PARENT",
      list:[
        'orange','lettuce','apple','banana'
      ]
    },
    config:{

    },


  }

  public showModal():void {
    this.isModalShown = true;
  }

  public hideModal():void {
    this.autoShownModal.hide();
  }

  public onHidden():void {
    this.isModalShown = false;
  }


}
