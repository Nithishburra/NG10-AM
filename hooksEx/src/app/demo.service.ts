import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  fun_one():string{
    return "main busines logic here";
  }
}
