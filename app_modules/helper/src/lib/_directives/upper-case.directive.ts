import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
@Directive({
  selector: '[ngModel][upper-case]'
})
export class UpperCaseDirective {

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  ngModel: any;

  constructor() { }

  @HostListener('input', ['$event']) onModelChange($event) {
    this.ngModel = $event.target.value.toUpperCase();
    this.ngModelChange.emit(this.ngModel);
  }

}
