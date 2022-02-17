import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import Product from "../model/products.model";

@Injectable({

    providedIn:"root"
 
})

export default class ProductService{
    [x: string]: any;
    constructor(private http:HttpClient){}

    public getproducts():Observable<Product[]>{
        return this.http.get<Product[]>("http://localhost:8070/products");
    }
}
