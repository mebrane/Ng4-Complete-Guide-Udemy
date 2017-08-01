import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('navSelected') navSelected= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelectedNav(event:string){
    this.navSelected.emit(event);
    // console.log("Event from Header", event);
  }
}
