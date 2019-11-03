import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formbuilder';

  public first = true;
  public second = false;
  public third=false;
  public four=false;
  public data;

  openSecondPage(event){
    this.first=event;
    this.second=!event;
  }

  

  addingData(event){
    this.data = event;
    console.log(this.data);
  }


  openThirdPage(event){
    this.second=event;
    this.third=!event;
  }

  openFourthPage(event){
    this.second=event;
    this.third=!event;
  }



}
