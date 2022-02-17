import { createAction,props } from "@ngrx/store";
import Product from "../model/products.model";
import { PRODUCTS_LIST, PRODUCTS_LIST_FAIL, PRODUCTS_LIST_SUCCESS } from "../types/product.types";




export const productsList = createAction(PRODUCTS_LIST);
export const productslistSuccess = createAction(PRODUCTS_LIST_SUCCESS,props<{"products":Product[]}>());
export const productsListFail = createAction(PRODUCTS_LIST_FAIL,props<{"error":string}>());
