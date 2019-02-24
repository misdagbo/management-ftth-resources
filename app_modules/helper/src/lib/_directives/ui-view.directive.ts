import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ui-view]'
})
export class UIViewDirective {

  @Input() data;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
