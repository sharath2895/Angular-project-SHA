import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
