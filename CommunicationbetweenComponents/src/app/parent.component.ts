import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  msg1:any = "HELLO_1";
  msg2:any = "HELLO_2";
  msg3:any = "HELLO_3";

  constructor() { }

  ngOnInit(): void {
  }

}
