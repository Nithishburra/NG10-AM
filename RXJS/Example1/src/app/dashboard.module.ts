import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import productsComponent from "./products.components";
import ProductsService from "./products.service";
import Dashboardcomponent from "./dashboard.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations:[Dashboardcomponent,productsComponent],
    imports:[CommonModule,  HttpClientModule,RouterModule.forChild([{path:"",component:productsComponent}]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule],
    providers:[ProductsService],
    exports:[Dashboardcomponent]
})

export class Dashboardmodule{

}