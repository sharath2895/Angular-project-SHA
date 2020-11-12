import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class SampleService {

  constructor() { }
  public sampledata: string = 'sharathsample';
  public sample2: string = ' service implement';
  public samplenumbers: number = 0;
  public output: number = 0;
  public sampleObservable$: Observable<string> = of('observable implementation');

  public sampleSubject = new Subject();
  public sampleSubject$ = this.sampleSubject as Observable<any>;
  public sampleBehaviourSubject = new BehaviorSubject(5);
  public sampleReplaySubject = new ReplaySubject(6);
  public sampleAsyncSubject = new AsyncSubject();

  get getSubject() {
    return this.sampleSubject$;
  }
  
  set setSubject(value) {
    this.sampleSubject.next(value);
  }

  sampleadder(a, b) {
    return a * b;
  }

  get Increment() {
    return this.output;
  }

  set Increment(a) {
    this.output += 10;
  }
}
