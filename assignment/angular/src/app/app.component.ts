import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges,DoCheck,AfterContentChecked,
AfterContentInit,AfterViewChecked,AfterViewInit, OnDestroy {
  public data: Observable<string>;
  public title: string  ;
  

  
  constructor() {
    
    this.title = 'LOGIN PAGE';
    
  }
  
  ngOnInit(){console.log('ngOnInit()') }
  ngOnChanges(){console.log('ngOnchanges()') }
  ngDoCheck(){console.log('ngDocheck()') }
  ngAfterContentChecked(){console.log('ngAfterContentChecked()') }
  ngAfterContentInit(){console.log('ngAfterContentInit()') }
  ngAfterViewInit(){console.log('ngAfterViewInit()') }
  ngAfterViewChecked(){console.log('ngAfterViewCheckedt()') }
  ngOnDestroy(){console.log('ngOnDestroy()') }
  



}
