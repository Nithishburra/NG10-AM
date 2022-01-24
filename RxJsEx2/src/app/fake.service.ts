import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import Fakedata from "./fake.model";

@Injectable({
    providedIn:"root"
})

export default class FakeService{

    constructor(private http:HttpClient){}

    public getfakeinfo():Observable<Fakedata>{
        return this.http.get<Fakedata>("https://reqres.in/api/users?page=2");
    }
}
