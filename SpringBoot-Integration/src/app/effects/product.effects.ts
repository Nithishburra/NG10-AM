import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError,map, mergeMap, of } from "rxjs";
import ProductService from "../service/product.service";
import { getproducts, getproductsSuccess ,getproductsFail} from "../actions/product.actions";
import ProductModel from "../model/product.model";

@Injectable({
    providedIn:"root"
})
export default class ProductsEffects{
    constructor(private actions$:Actions,
                private service:ProductService){}

                products$ = createEffect(()=> this.actions$.pipe(
                    ofType(getproducts),
                   mergeMap(()=>this.service.GetProducts().pipe(map((posRes:ProductModel[])=>{
                        return getproductsSuccess({"products":posRes})
                    }),catchError((error)=>
                        of(getproductsFail({"error":"Network Fail"})))))
                  
                    ));
            
}


