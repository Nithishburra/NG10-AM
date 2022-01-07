import {Input,Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Input() var_one:any;
  @Input() var_two:any;
  @Input() var_three:any;
  ngOnInit(): void {
  }

}
