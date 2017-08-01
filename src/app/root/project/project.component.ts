import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  item:string;
  constructor() { }

  ngOnInit() {
  }

  onSelectedNav(item:string){//
    this.item=item;
    console.log(this.item);
  }

}
