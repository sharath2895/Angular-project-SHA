import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
loginForm: FormGroup;
  constructor() { 

  }

  ngOnInit(): void {
this.loginForm = new FormGroup({
  userName : new FormControl([Validators.required,Validators.maxLength(10)]),
  password: new FormControl()
})
  }

  login(){
    let username = this.loginForm.controls['username'].value
    let password = this.loginForm.controls['password'].value
  }
}
