import { createAction, props } from "@ngrx/store";
import ProductModel from "../model/product.model";
import {GET_PRODUCTS,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL} from "../types/product.types";

export const getproducts = createAction(GET_PRODUCTS);
export const getproductsSuccess = createAction(GET_PRODUCTS_SUCCESS,props<{"products":ProductModel[]}>());
export const getproductsFail  = createAction(GET_PRODUCTS_FAIL,props<{"error":string}>());




