import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childone',
  templateUrl: './childone.component.html',
  styles: [
  ]
})
export class ChildoneComponent implements OnInit {

  var_four:String="Child-one!";

  constructor() { }

  ngOnInit(): void {
  }

}
