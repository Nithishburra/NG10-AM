import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: [
  ]
})
export class PagetwoComponent implements OnInit {

  var_two:string = "pagetwo"
  
  constructor() { }

  ngOnInit(): void {
  }

}
