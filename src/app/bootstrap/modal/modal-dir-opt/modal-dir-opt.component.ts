import {Component, OnInit, Input} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-dir-opt',
  templateUrl: './modal-dir-opt.component.html',
  styleUrls: ['./modal-dir-opt.component.css']
})
export class ModalDirOptComponent implements OnInit {

  @Input() modalRef:BsModalRef;
  @Input() content:ModalDirOptComponent;

  public title:string;
  public list:any[];

  constructor() { }

  ngOnInit() {
    console.log(this.content);//
  }

}
