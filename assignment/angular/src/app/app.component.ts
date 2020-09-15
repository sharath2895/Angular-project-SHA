import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { VERSION } from '@angular/material/core';
import { SampleService } from 'src/shared/services/sample.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleService]
})
export class AppComponent implements OnInit,DoCheck,
 OnChanges
 //AfterContentChecked,
//AfterContentInit,AfterViewChecked,AfterViewInit, OnDestroy 
{
  public data: Observable<string>;
  public title: string ;
  version = VERSION;
  service = "sampleservice"
sharath = "service Implement"
a:number = 5;
b:number =6;
  constructor( public sampleservice: SampleService) {
  }
  
  ngOnInit(){
this.sharath = this.sampleservice.sampledata;
this.service= this.sampleservice.sample2
//this.sampleservice.samplenumbers +=1;
console.log(this.sampleservice.samplenumbers)
}
submit(){
  const incrementedValue =this.sampleservice.Increment; //getter value
  this.sampleservice.samplenumbers += this.sampleservice.sampleadder(this.a,this.b) + incrementedValue ; 
  this.sampleservice.Increment += 1; //settervalue 
  
 //this.sampleservice.sampleadder(this.a,this.b);
 
}
ngDoCheck(){
  
 // this.sampleservice.samplenumbers +=1;
  console.log(this.sampleservice.samplenumbers)
}
  ngOnChanges(){
    console.log('ngOnchanges()') 
   // this.sampleservice.samplenumbers +=1;
    console.log(this.sampleservice.samplenumbers);
  }

 //ngAfterContentChecked(){console.log('ngAfterContentChecked()') }
 //ngAfterContentInit(){console.log('ngAfterContentInit()') }
// ngAfterViewInit(){console.log('ngAfterViewInit()') }
 //ngAfterViewChecked(){console.log('ngAfterViewCheckedt()') }
 //ngOnDestroy(){console.log('ngOnDestroy()') }
  

 
}
