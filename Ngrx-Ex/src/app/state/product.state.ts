import Product from "../model/products.model";

interface ProductsState{
    loading : boolean;
    products : Product[],
    error : string;
}
export default ProductsState;