import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css']
})
export class LastPageComponent implements OnInit {

  @Input() dam:object;

  constructor() { }

  ngOnInit() {
    console.log(this.dam['username']);
  }

}
