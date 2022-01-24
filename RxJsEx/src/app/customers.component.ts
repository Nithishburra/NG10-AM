import { Component } from '@angular/core';
import CustomersService from './customers.service';
import Customers from  './customers.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'customer',
  templateUrl: './customers.component.html',
})
export class CustomersComponent{
    result:Customers;
  constructor(private service:CustomersService) { }

  ngOnInit(){
    this.service.getCustomers().subscribe((posRes:Customers)=>{      
      this.result =posRes;
    },(errRes:HttpErrorResponse)=>{
      if(errRes.error instanceof Error){
        console.log("client side error");
      }else{
        console.log("server side error");
      }
      

    })


  }
  

}
