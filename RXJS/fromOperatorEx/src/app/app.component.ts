import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fromOperatorEx';
   arr$:any;



  arr:any[]=[{"sub":"Angular","code":"NG"},
             {"sub":"Reactjs","code":"React"},
             {"sub":"vuejs","code":"vue"}];

      
  constructor(){
         this.arr$  =from(this.arr)

         this.arr$.subscribe({
             next:(element:any)=>{ console.log(element)},
             error:(err:any)=>{console.log(err)},
             complete:()=>{console.log("completed")}
         })
      
  }
}
