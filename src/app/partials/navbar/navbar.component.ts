import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output('navSelected') navSelected= new EventEmitter<string>();
  item:string="recipes";
  constructor() { }

  ngOnInit() {

  }

  onSelectNav(item:string){
    this.item=item;
    this.navSelected.emit(item);
    // console.log('Item from Nav: ',this.item);
  }

}
