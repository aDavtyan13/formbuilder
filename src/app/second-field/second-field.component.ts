import { Component, OnInit, Output } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { map,tap, distinctUntilChanged } from 'rxjs/operators';

import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'second-field',
  templateUrl: './second-field.component.html',
  styleUrls: ['./second-field.component.css']
})



export class SecondFieldComponent implements OnInit {

  @Output() openThirdPage = new EventEmitter;
  @Output() addSecondData=new EventEmitter;

  secondpage: FormGroup;

  get cardInput() {
    return this.secondpage.get("cardNumber");
   }

  get monthInput(){
    return this.secondpage.get("cardMonth");
  }

    constructor(private fb: FormBuilder,private router: Router) {}

    public submitted;
    public cardNumber;
    public cardOwner;
    public cardCVV;
    public cardMonth;

    public cardOpen=false;

    public array = [];
    public k = 0;
    public allow=true;

    ngOnInit() {

      this.secondpage = this.fb.group({
        cardOwner: ['',[Validators.required,Validators.pattern('^(Mr\.|Mrs\.|Ms\.)([a-z]+)( [a-z]+)*( [a-z]+)*$')]],
        cardNumber: ['',[Validators.required,Validators.minLength(19)]],
        cardCVV: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
        cardMonth: ['',[Validators.required,Validators.minLength(4)]],
        city: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]],
        street: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 / . _-]+$')]]
                     
      });
       
      this.cardInput.valueChanges.pipe(
        distinctUntilChanged(),
        map(value => this.formatCardNumber(value)),
        tap(value => this.cardInput.patchValue(value))
      ).subscribe((val) => {
        console.log(val, "cardinput")
      })

      this.monthInput.valueChanges.pipe(
        distinctUntilChanged(),
        map(value=>this.formatCardMonth(value)),
        tap(value=>this.monthInput.patchValue(value))
      )
      .subscribe((val)=>{
        console.log(val,"month")
      })

  }
  
  buttClick(){
    this.submitted=true;
    if(this.secondpage.valid) {
      this.addSecondData.emit(this.secondpage.value);
      this.openThirdPage.emit(false);
    }  
  }


  public billingOpen = false;

  private formatCardNumber(value: string): string {
    return value
      .replace(/\s+/g, "")
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?!$)/g, "$1 ");
  }

  private formatCardMonth(value: string): string{
    return value
    .replace(/\s+/g,"")
    .replace(/\D/g, "")
    .slice(0, 4)
    .replace(/(\d{2})(?!$)/g, "$1/");
  }

  
  cardButton(){
    this.cardOpen=true;
    if(this.k<3){
      this.array.push({
        'cardNumber': this.cardNumber,
        'cardOwner': this.cardOwner,
        'cardCVV':  this.cardCVV,
        'cardMonth': this.cardMonth
    });
    this.k++;
  }
   
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
