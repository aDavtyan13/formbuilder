import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'first-field',
  templateUrl: './first-field.component.html',
  styleUrls: ['./first-field.component.css']
})
export class FirstFieldComponent implements OnInit {
    user: FormGroup;

    constructor(private fb: FormBuilder) {}


      ngOnInit() {

        this.user = this.fb.group({
          
          username: ['',[Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z1-9]+$')]],
            email: [null,[Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
            password:['',Validators.required],
            confPass:['',Validators.required]            
  
        });
      }

      onSubmit() {
        console.log(this.user.value, this.user.valid);
      }
}