import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import Customers from "./customers.model";


@Injectable({
    providedIn:"root"
})

export default class CustomersService{

    constructor(private http:HttpClient){}

    public getCustomers():Observable<Customers>{
        return this.http.get<Customers>("https://www.w3schools.com/angular/customers.php");
    }

};
