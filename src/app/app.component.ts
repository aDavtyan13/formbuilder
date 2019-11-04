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
  public fourth=false;
  public data;

  public oneData;
  public twoData;
  public threeData;

  addingData(event){
    this.data = event;
    this.oneData=event;
    // console.log(this.data);
  }

  addingSecondData(event){
    this.data = event;
    this.twoData=event;
  }

  addingThirdData(event){
    this.data = event;
    this.threeData=event;
    
  }


  openSecondPage(event){
    this.first=event;
    this.second=!event;
  }

  openThirdPage(event){
    this.second=event;
    this.third=!event;
  }

  openFourthPage(event){
    this.third=event;
    this.fourth=!event;
  }



}
