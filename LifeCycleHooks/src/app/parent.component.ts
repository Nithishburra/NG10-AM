import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   num:number = 0;

   arr:number[] = [10,20,30,40];

   changearr():any{
     this.arr.push(10);
   }

   ngDoCheck(){
     console.log("change detected in directive");
   }

}

