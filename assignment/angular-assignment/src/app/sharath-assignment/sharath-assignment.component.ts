import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sharath-assignment',
  templateUrl: './sharath-assignment.component.html',
  styleUrls: ['./sharath-assignment.component.css']
})
export class SharathAssignmentComponent implements OnInit {

  private data: Observable<string>;
  title: string = 'End User License Agreement'
  subtitle: string = 'To Continue, you must agree to this agreement'
  constructor() {

  }
  signin(){
    alert('you disagree to the license')
    console.log("you disagree")
    return
  }

  ngOnInit(): void {

  }

}
