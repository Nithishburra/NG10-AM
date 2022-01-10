import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docheck',
  templateUrl: './ng-docheck.component.html',
  styles: [
  ]
})
export class NgDocheckComponent implements OnInit {

  arr:number[];
  constructor() {
    this.arr = [1,2,3,4,5]
   }

   
  ngOnInit(): void {
  }

  ngDoCheck(){
    console.log("change detected in directive");
  }
  clickMe(){
    this.arr.push(6)
  }
  
}

