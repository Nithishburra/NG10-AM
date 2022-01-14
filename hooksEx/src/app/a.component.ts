import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Acomp',
  template: `<ng-content></ng-content>`,
  styles: [
  ]
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){

     console.log("ngAfterContent Init");
  }

}
