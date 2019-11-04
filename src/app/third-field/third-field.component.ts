import { Component, OnInit, Output } from '@angular/core';
import {  FormBuilder, EmailValidator } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { EventEmitter } from '@angular/core';


@Component({
  selector: 'third-field',
  templateUrl: './third-field.component.html',
  styleUrls: ['./third-field.component.css']
})
export class ThirdFieldComponent implements OnInit {
  
  @Output() openFourthPage = new EventEmitter;
  @Output() addThirdData = new EventEmitter;

  thirdPage: FormGroup;

  constructor(private fb: FormBuilder) { }

    public submitted;
    public selected;
    
      ngOnInit() {

        this.thirdPage = this.fb.group({
            
          radios: ['', Validators.required],
           
          email: [null,[Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
  
        });
  }

  buttClick(){
    this.submitted=true;
    
    if(this.selected=='Later' || ((this.selected=='Subscribe')&& this.thirdPage.valid)) {
      this.addThirdData.emit(this.thirdPage.value);
      this.openFourthPage.emit(false);
    }
  }

  dam(event){
    this.selected=event.target.value;
  }


}
