import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

class AuthService{

    canActivate():boolean{
        return confirm("do you want to enter into this second page ?");
    }

     canDeactivate():boolean{
         return confirm("do you want to leave third page ?");
    }

     canActivateChild():boolean{
         return confirm("do you want to enter child one ?");
     }
}



export default AuthService;

