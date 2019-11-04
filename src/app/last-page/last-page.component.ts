import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css']
})
export class LastPageComponent implements OnInit {

  @Input() damOne:object;
  @Input() damTwo:object;
  @Input() damThree:object;

  constructor() { }

  ngOnInit() {
    
  }

}
