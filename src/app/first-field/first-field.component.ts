import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'first-field',
  templateUrl: './first-field.component.html',
  styleUrls: ['./first-field.component.css']
})
export class FirstFieldComponent implements OnInit {

    @Output() openSecondPage = new EventEmitter;
    @Output() addData = new EventEmitter;

    firstpage: FormGroup;

    constructor(private fb: FormBuilder) {}

    public submittedForm;

      ngOnInit() {

        this.firstpage = this.fb.group({
          
          username: ['',[Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z1-9]+$')]],
          email: [null,[Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
          password:['',Validators.required],
          confPass:['',Validators.required]            
  
        });
      }

      buttClick(){
        this.submittedForm=true;
        if(this.firstpage.valid) {
          this.addData.emit(this.firstpage.value)
          this.openSecondPage.emit(false);
        }  
      }
}