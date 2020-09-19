import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  constructor(public sampleservice: SampleService) {
    //  this.username = '';
    //  this.pass = ''

  }
  ngOnInit() {
    this.readSample = this.sampleservice.sampleObservable$
      // .pipe(map((value) => {
      //     this.readSample = value;
      //   }))
      .subscribe((value) => {
        this.readSample = value;
      });
  }
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
