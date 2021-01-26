import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpened = false;

  constructor() { }

  ngOnInit(): void {}

  sidebarToggler(){
    this.sidebarOpened= !this.sidebarOpened;
  }

}
