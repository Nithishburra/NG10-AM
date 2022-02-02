import { Routes } from "@angular/router";

const appRoutes:Routes = [{path:"",loadChildren:()=>import("./login.module").then((m)=>m.Loginmodule)},
                     {path:"dashboard",loadChildren:()=>import("./dashboard.module").then(m=>m.Dashboardmodule)}];

export default appRoutes;

