import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

   arr:any[];
  constructor() { 
    this.arr=[
      
          {"p_id":11,"p_name":"puma","p_price":20000},
          {"p_id":12,"p_name":"Nike","p_price":40000},
          {"p_id":13,"p_name":"Adidas","p_price":60000},
          {"p_id":14,"p_name":"Max","p_price":80000},
          {"p_id":15,"p_name":"Bata","p_price":100000}
          ]
  }

  ngOnInit(): void {
  }

   myFun(data:any){
      alert(JSON.stringify(data));
   }
}
