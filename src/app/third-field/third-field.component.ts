import { Component, OnInit, Output } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { EventEmitter } from '@angular/core';


@Component({
  selector: 'third-field',
  templateUrl: './third-field.component.html',
  styleUrls: ['./third-field.component.css']
})
export class ThirdFieldComponent implements OnInit {
  
  @Output() openFourthPage = new EventEmitter;
  @Output() addFourthData = new EventEmitter;

  thirdPage: FormGroup;

  constructor(private fb: FormBuilder) { }

    public submitted;

      ngOnInit() {

        this.thirdPage = this.fb.group({
          
            radioSubscribe: ['',],
            email: [null,[Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
            radioLater:['',]            
  
        });
  }

  buttClick(){
    this.submitted=true;
    if(this.thirdPage.valid) {
      this.addFourthData.emit(this.thirdPage.value)
      this.openFourthPage.emit(false);
    }  
  }


}
