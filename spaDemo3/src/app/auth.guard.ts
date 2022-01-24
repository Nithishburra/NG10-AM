import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export default class AuthService{
    canLoad():boolean{
        return confirm("Do you want to Enter Customer Module?");
    }
}
