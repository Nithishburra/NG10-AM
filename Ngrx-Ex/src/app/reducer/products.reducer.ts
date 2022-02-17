import { createReducer, on } from "@ngrx/store";
import { productsList,  productslistSuccess,productsListFail } from "../actions/product.action";
import ProductsState from "../state/product.state";

const initialState:ProductsState = {
    loading :  false,
    products : [],
    error : ""
};

const _productsReducer = createReducer(initialState,on(productsList,(state)=>{
    return{
        ...state,
        loading:false,
        products:[],
        error:""
    }
}),on( productslistSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:action.products,
        error:""
    }
}),on(productsListFail,(state,action)=>{
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
