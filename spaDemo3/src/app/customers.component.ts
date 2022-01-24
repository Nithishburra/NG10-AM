import { Component } from "@angular/core";
import CustomersService from "./customers.service";

@Component({
    selector:"customers",
    templateUrl:"./customers.component.html"
})

export default class CustomersComponent{
    res:any;

    constructor(private service: CustomersService){}

    ngOnInit(){
        this.service.getCustomers().subscribe((PosRes)=>{
            this.res=PosRes;
        },(errRes)=>{
             console.log(errRes);
        });
    }
}
