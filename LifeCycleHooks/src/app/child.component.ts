import {Input, Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() v1:any;

  ngOnInit(): void {

    //first life cycle hook
    // only once execute
    // it used to business logic (main) --> calling the services 
  }
 
  ngOnChanges(changes:SimpleChange){
    console.log(changes);
  }
 
}
