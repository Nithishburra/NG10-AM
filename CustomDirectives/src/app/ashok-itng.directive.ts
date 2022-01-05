import {Input, Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ashokITNG]'
})
export class AshokITNGDirective {

  constructor(private memory:ViewContainerRef,
              private tag:TemplateRef<any>) { }

    @Input() set ashokITNG(flag:boolean){
      if(flag){
        this.memory.createEmbeddedView(this.tag);
      }else{
        this.memory.clear();
      }
    }
}
