import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { catchError, mergeMap } from "rxjs/operators";
import { productslistSuccess, productsList, productsListFail } from "../actions/product.action";
import Product from "../model/products.model";
import ProductService from "../service/product.service";


@Injectable({
    providedIn:"root"
})

export default class ProductsEffects{
    constructor(private actions$:Actions,
        private service:ProductService){}

        
    product$ = createEffect(()=> this.actions$.pipe(
        ofType(productsList),
        mergeMap(()=> this.service.getproducts().pipe(map((posRes:Product[])=>{
            return productslistSuccess ({"products":posRes})
        }),catchError((err)=>of(productsListFail({"error":"Network Fail"})))) )
        ) );
}


        
         
