import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-leftnavigation',
  templateUrl: './leftnavigation.component.html',
  styleUrls: ['./leftnavigation.component.css']
})
export class LeftnavigationComponent implements OnInit {
  @Input () value: string ='child-data';
  @Output () outputvalue = new EventEmitter <string>();
  routes = routes;
  filter= false;
showleftpanel= true;
  
  constructor(public sampleservice: SampleService) {

  }

 ngOnInit() {
  console.log(this.sampleservice.samplenumbers)
  this.sampleservice.samplenumbers =this.sampleservice.samplenumbers + 1;
  }
  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }
  // onFilterChange(eve: any) {
  //   this.filter = !this.filter;
  //   console.log('checkbox is checked')
  // }
 
  sendValue(){
this.outputvalue.emit('Value is emitted from child');
console.log(this.outputvalue);
  }

}
