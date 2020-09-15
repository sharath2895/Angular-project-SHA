import { Injectable } from '@angular/core';

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
