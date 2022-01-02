import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  var_one:string = "hello_1";
  var_two:string ="WELCOME";

  var_three:number =100;

  var_four:any = {"P_ID":101,"P_Name":"sai","P_cost":2000}

  var_five:Date = new Date();

  var_six:number = 100.12345;

  var_seven:number[] = [10,20,30,40,50]
  
  var_eight:number = 0.6;

  var_nine:any;
   constructor(){
     this.var_nine = new Promise((resolve,reject)=>{
       setTimeout(()=>{
          resolve("hello");
       },6000)
     })
   }

  var_ten:string = "nithish";

  var_11:string = "angular";

  var_12:string = "to";

  var_13:string = "welcome";
}
