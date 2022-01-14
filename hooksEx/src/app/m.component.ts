import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Mcomp',
  template: ` <Acomp>
                   <Bcomp></Bcomp>
                 </Acomp>`,
  
  styles: [
  ]
})
export class MComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
