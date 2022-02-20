import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import ProductModel from "../model/product.model";

@Injectable({
        providedIn:"root"
})
export default class ProductService{

    constructor(private http:HttpClient){}

    public GetProducts():Observable<ProductModel[]>{
        return this.http.get<ProductModel[]>("http://localhost:5200/api/v1/products");
    }
}
