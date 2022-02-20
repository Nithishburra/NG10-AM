import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Demo2Service {

  constructor(private Http:HttpClient) { }

  public getProducts():Observable<any>{
    return this.Http.get("https://reqres.in/api/users?page=2")
  }
}
