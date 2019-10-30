import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'first-field',
  templateUrl: './first-field.component.html',
  styleUrls: ['./first-field.component.css']
})
export class FirstFieldComponent implements OnInit {
  myform: FormGroup;
  username: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required
      
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
     
        username: this.username,
        lastName: this.lastName,
     

      email: this.email,
      password: this.password,
    });
  }

  onSubmit(){
    if(this.myform.valid) {
      console.log("Form Submitted!");
      this.myform.reset();
    }
  }

}