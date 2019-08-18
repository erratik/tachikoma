import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appProfileDisplay]'
})
export default class ProfileDisplayDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

  @Input()
  set appProfileDisplay(space: string) {
    console.log(this.templateRef);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
