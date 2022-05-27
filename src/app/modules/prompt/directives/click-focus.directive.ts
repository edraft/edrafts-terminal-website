import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickFocus]'
})
export class ClickFocusDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick($event: any): void {
    document.getElementById('active-input')?.focus();
  }

}
