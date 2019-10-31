import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[monthDir]'
})
export class monthDirective {

  elem = this.elementRef.nativeElement;
  constructor(
    private elementRef: ElementRef) {
  }
  
  @HostListener('keyup', ['$event.target.value'])
  onkeyup(inp) {
    if(inp.length>0){
      this.elem.value = this.elem.value.match(new RegExp('[0-9]{1,2}', 'g')).join("/");
    } 

  }

}
