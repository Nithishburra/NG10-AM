import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp2',
  templateUrl: './comp2.component.html',
  styles: [
  ]
})
export class Comp2Component implements OnInit {

   var_one:string = "HELLO-1";
   var_two:string = "HELLO-2";

  constructor() { }

  ngOnInit(): void {
  }

}
