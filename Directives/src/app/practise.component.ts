import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'practise',
  templateUrl: './practise.component.html',
  styles: [
  ]
})
export class PractiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   var_one:string = "Hello_1";

   arr:any[]=[
        {'cost':1000},
        {'cost':2000},
        {'cost':3000},
        {'cost':4000}
   ];

   getColor():any{
      return "blue"
   }
 
   

   num:number=0;
}
