import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export default class ProductsService{
    constructor(private http:HttpClient){}

    public getproducts():Observable<any>{
        const str:any = window.localStorage.getItem("auth");
        const obj:any  = JSON.parse(str);
        return this.http.get("http://localhost:8010/products",{"headers":{token:obj.token}})

    }
}