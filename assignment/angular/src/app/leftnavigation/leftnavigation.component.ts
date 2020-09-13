import { Component, OnInit } from '@angular/core';
import { ROUTES, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-leftnavigation',
  templateUrl: './leftnavigation.component.html',
  styleUrls: ['./leftnavigation.component.css']
})
export class LeftnavigationComponent implements OnInit {
  routes = ROUTES;

  
  constructor() {

  }

 ngOnInit() { }
  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }

}
