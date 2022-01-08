import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Comp2Component } from './comp2.component';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styles: [
  ]
})
export class Comp1Component implements OnInit {

  //@ViewChild(Comp2Component,{static:true}) c2:Comp2Component

   @ViewChildren(Comp2Component) obj:QueryList<Comp2Component> = new QueryList();


    arr:any[]
    ngAfterViewInit(){
      this.arr = this.obj.toArray(); 
    }
  constructor() { }

  ngOnInit(): void {
  }

  clickMe():any{
   // this.c2.var_one = "WELCOME-1";
    //this.c2.var_two = "WELCOME-2";

    this.arr[0].var_one = "X1";
    this.arr[0].var_two = "X2";

    this.arr[1].var_one = "Y1";
    this.arr[1].var_two = "Y2";

    this.arr[2].var_one = "Z1";
    this.arr[2].var_two = "Z2";
  }
}
