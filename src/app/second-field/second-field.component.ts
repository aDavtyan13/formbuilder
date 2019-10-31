import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-second-field',
  templateUrl: './second-field.component.html',
  styleUrls: ['./second-field.component.css']
})
export class SecondFieldComponent implements OnInit {

  secondpage: FormGroup;

    constructor(private fb: FormBuilder,private router: Router) {}


    ngOnInit() {

      this.secondpage = this.fb.group({
          
        cardNumber: ['',[Validators.required,Validators.minLength(19)]],
        cardCW: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
        cardMonth: ['',[Validators.required,Validators.minLength(4)]],
        city: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]],
        street: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]]
                     
      });
    }

  public cardOpen = false;
  public billingOpen = false;


  cardButton(){
    this.cardOpen=true;
  }

  billingAddress(){
    this.billingOpen=true;
  }

  numberOnly(event){
   
    var code = event.keyCode;
    if(code > 47 && code < 57){
      return true;
    }
    return false;

  }

}
