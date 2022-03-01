import { Component } from '@angular/core';
import { first, map, mapTo, of, skip, take, tap } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="OperatorEx"
 
   
  constructor(private http:HttpClient){}

   ngOnInit():void{

    // of(1,2,3,4,5,6,7).pipe(map(val=>val*10)).subscribe((posRes)=>{
    //   console.log(posRes);
    // },(errRes)=>{
    //   console.log(errRes)
    // },()=>{
    //   console.log("done...!!")
    // })


    // of(1,2,3,4,5,6).pipe(mapTo("Request !!")).subscribe((posRes)=>{
    //   console.log(posRes)
    // },(errRes)=>{
    //    console.log(errRes)
    // },()=>{
    //    console.log("completed..!")
    // })

     // of(1,2,3,4,5).pipe(take(5)).subscribe(console.log);
     //of(1,2,3,4,5,6,7).pipe(take(3)).subscribe(console.log);
      //of(1,2,3,4,5,6,7,8).pipe(first()).subscribe(console.log);
      //of(1,2,3,4,5).pipe(skip(3)).subscribe(console.log);
       //of(1,2,3,4,5,6).pipe(skip(5)).subscribe(console.log);

      //  of(11,22,33,44,55,66,77).pipe(tap(val=>{
      //      console.log("Tap.....",val*10)}),map(val=>val)
      //  ).subscribe(console.log)
       
      

      this.http.get(`https://www.w3schools.com/angular/customers.php`).pipe(map((posRes:any)=>{
        const {records} = posRes;
        return records.map((element:any)=>{
            return{
                Name : element.Name
            }
        });
    })).subscribe(console.log);

   }
}
