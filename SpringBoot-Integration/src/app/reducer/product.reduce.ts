import { createReducer, on } from "@ngrx/store";
import { getproducts, getproductsFail, getproductsSuccess } from "../actions/product.actions";

import ProductsState from "../state/product.state";

const initialState:ProductsState = {
    loading:false,
    products:[],
    error:""
}

const _productsReducer = createReducer(initialState,on(getproducts,(state)=>{
    return{
        ...state,
        loading:false,
        products:[],
        error:""
    } 
}), on(getproductsSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:action.products,
        error:""     
    }
}),on(getproductsFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:[],
        error:action.error     
    }
}))

export function productsReducer(state:any,action:any){
    return _productsReducer(state,action);
}
