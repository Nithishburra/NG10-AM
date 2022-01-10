import { Component, OnInit } from '@angular/core';
import {DemoService} from './demo.service';
@Component({
  selector: 'oninit',
  templateUrl: './oninit.component.html',
  styles: [
  ]
})
export class OninitComponent implements OnInit {

  constructor(private myobj:DemoService) { }

   msg:string="";

  ngOnInit(): void {
   this.msg= this.myobj.fun_one();
  }


}
