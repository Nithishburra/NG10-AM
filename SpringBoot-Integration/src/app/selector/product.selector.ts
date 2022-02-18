import { createFeatureSelector, createSelector } from "@ngrx/store";
import ProductsState from "../state/product.state";

export const productsSelector = createSelector(createFeatureSelector<ProductsState>("products"),(state)=>{
    return state;
})