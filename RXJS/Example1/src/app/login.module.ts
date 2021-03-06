import { NgModule } from "@angular/core";
import LoginComponent from "./login.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import LoginService from "./login.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations:[
        LoginComponent,
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild([{path:"",component:LoginComponent}])
    ],
    providers:[LoginService],
    exports:[LoginComponent]
})

export  class Loginmodule{

}
