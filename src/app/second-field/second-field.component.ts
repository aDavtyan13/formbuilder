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
          
          city: ['',[Validators.required, Validators.minLength(3)]],
                     
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
}
