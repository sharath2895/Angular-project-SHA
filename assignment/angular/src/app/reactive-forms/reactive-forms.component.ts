import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  loginform: FormGroup;

  constructor() {
    
  }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      userName: new FormControl('sharath',
        [Validators.required,
        Validators.maxLength(10),
        Validators.minLength(4),
        Validators.pattern(/^[0-9a-zA-Z]+$/),
        ]),
      password: new FormControl('sharu', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl(Validators.required, Validators.minLength(8)),
      email: new FormControl('sharath@gmail.com', [Validators.required, Validators.email]),
      comments: new FormArray([])

    },
      this.customValidators

    );
    this.userNameValueChanges();
    this.userNameStatusChange();
    this.passwordValueChanges();
    this.passwordStatusChanges();
    this.emailValueChanges();
    this.addField();
    this.addField();
    this.addField();
    this.addField();
    this.addField();
    this.addField();
    this.addField();

    
  }



  addField() {
    let arr = this.f.controls['comments'] as FormArray;
    arr.push(new FormControl('type comments'));
  }
  removeField(i:number) {
    let arr = this.f.controls['comments'] as FormArray;
    arr.removeAt(i);
  }
  customValidators(fGroup: FormGroup) {

    return fGroup.get('password').value === fGroup.get('confirmpassword').value
      ? null : { 'mismatch': true };
  }

  get userName() {
    return this.loginform.get('userName')
  }
  get password() {
    return this.loginform.get('password')
  }
  get email() {
    return this.loginform.get('email')
  }
  get f() {
    return this.loginform;
  }
  userNameValueChanges() {
    this.userName.valueChanges.pipe(
      map(name => console.log(name))
    ).subscribe();
  }
  passwordValueChanges() {
    this.password.valueChanges.pipe(
      map(password => console.log(password))
    ).subscribe();
  }
  emailValueChanges() {
    this.email.valueChanges.pipe(
      map(email => console.log(email))
    ).subscribe();
  }
  userNameStatusChange() {
    this.userName.statusChanges.pipe(
      map(status => console.log(status))
    ).subscribe();

  }
  passwordStatusChanges() {
    this.password.statusChanges.pipe(
      map(password => console.log(password))
    ).subscribe();
  }
  emailStatusChanges() {
    this.email.statusChanges.pipe(
      map(email => console.log(email))
    ).subscribe();
  }

  login() {
    let val = this.loginform.controls['userName'].value;
    let x = this.loginform.controls['password'].value;
    //alert('username'.valueOf)
  }
}
