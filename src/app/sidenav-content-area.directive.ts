import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSidenavContentArea]'
})
export class SidenavContentAreaDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
