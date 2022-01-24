import { Routes } from "@angular/router";
import AuthService from "./auth.guard";
import PageOneComponent from "./pageone.component";

const appRoutes:Routes = [{path:"page_one",component:PageOneComponent},
                 {path:"lazy",loadChildren:()=>import("./customers.module").then(res=>res.CustomersModule),canLoad:[AuthService]}];

 export default appRoutes;