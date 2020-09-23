import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { VERSION } from '@angular/material/core';
import { SampleService } from 'src/shared/services/sample.service';
import { LeftnavigationComponent } from './leftnavigation/leftnavigation.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleService]
})
export class AppComponent implements OnInit,DoCheck,
 OnChanges,AfterViewInit
 //AfterContentChecked,
//AfterContentInit,AfterViewChecked,AfterViewInit, OnDestroy 
{
//   public data: Observable<string>;
//   public title: string ;
//   version = VERSION;
//   service = "sampleservice"
// sharath = "service Implement"
// a:number = 5;
// b:number =6;
// public displayText = false ;
  constructor( public sampleservice: SampleService) {
  }
  @ViewChild (LeftnavigationComponent) child;
  ngOnInit(){
// this.sharath = this.sampleservice.sampledata;
// this.service= this.sampleservice.sample2
// //this.sampleservice.samplenumbers +=1;
// console.log(this.sampleservice.samplenumbers)
}
// submit(){
//   const incrementedValue =this.sampleservice.Increment; //getter value
//   this.sampleservice.samplenumbers += this.sampleservice.sampleadder(this.a,this.b) + incrementedValue ; 
//   this.sampleservice.Increment += 1; //settervalue 
  
//  //this.sampleservice.sampleadder(this.a,this.b);
 
// }
ngDoCheck(){
  
 // this.sampleservice.samplenumbers +=1;
  // console.log(this.sampleservice.samplenumbers)
}
  ngOnChanges(){
    console.log('ngOnchanges()') 
   // this.sampleservice.samplenumbers +=1;
    // console.log(this.sampleservice.samplenumbers);
  }
  // buttonFunc(){
  //   this.displayText = !this.displayText;
  //   console.log( "button clicked");}
  
 //ngAfterContentChecked(){console.log('ngAfterContentChecked()') }
 //ngAfterContentInit(){console.log('ngAfterContentInit()') }
 ngAfterViewInit(){
   console.log('ngAfterViewInit()');
  console.log( this.child.viewChildResulthttp );
}
 //ngAfterViewChecked(){console.log('ngAfterViewCheckedt()') }
 //ngOnDestroy(){console.log('ngOnDestroy()') }
  
recieveValue($event){
console.log($event);
}
 
}
