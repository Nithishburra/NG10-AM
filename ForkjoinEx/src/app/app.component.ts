import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Demo1Service } from './Services/demo1.service';
import { Demo2Service } from './Services/demo2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ForkjoinEx';

  result1:any;
  result2:any;
  constructor(private Service1:Demo1Service,
               private Service2:Demo2Service){}
    
    ngOnInit(){
      forkJoin([this.Service1.getCustomers(),this.Service2.getProducts()]).subscribe((posRes)=>{
        this.result1 = posRes[0];
         this.result2= posRes[1];

      },(errRes:HttpErrorResponse)=>{
        if(errRes.error instanceof Error){
            console.log("clinet side server");
        }else{
           console.log("server side error");
        }
      })
    }
    
}
