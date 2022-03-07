import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export default class MyService{

    subject:Subject<string> = new Subject<string>();

    setData(msg:string){
        this.subject.next(msg);
    }

    getData():Observable<string>{
        return this.subject.asObservable();

}
}
