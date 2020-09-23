import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { SampleService } from 'src/shared/services/sample.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //public data: Observable<string>;
  // public username: string;
  // public pass: string;
  // public errormessage: string;
  //public LogIn: string = 'Submit';
  public readSample;
  public readSample2;
  public readSample3;
  constructor(public sampleservice: SampleService) {
    //  this.username = '';
    //  this.pass = ''

  }
  ngOnInit() {
    this.sampleservice.sampleObservable$

      .subscribe((value) => {
        this.readSample = value;
      });

    this.sampleservice.sampleObservable$
      .pipe(
        tap((value) => {
          this.readSample2 = value;
        }))
      .subscribe();

    this.readSample3 = this.sampleservice.sampleObservable$
    .pipe(
      map((value): string => {
      return  value + ' is working'
    }))
    
      
    // }
    // public signIn() {
    // const username = !this.username
    //  if (!this.username) {
    //this.errormessage = "enter username"
    // return
    //}// else if (!this.pass) {
    // this.errormessage = "enter password"
    // return
    // }
    //this.errormessage = undefined
    //alert("logged in successfully")
    //// }

  }
}
