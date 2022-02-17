import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsList } from './actions/product.action';
import Product from './model/products.model';
import { productsSelector } from './selector/product.select';
import ProductsState from './state/product.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loading:boolean;
  products:Product[];
  error:string;

  constructor(private store:Store<ProductsState>){
      this.loading = false;
      this.products = [];
      this.error = "";      
  }

  ngOnInit(){
      this.store.select(productsSelector).subscribe((posRes:ProductsState)=>{
          const {loading,products,error} = posRes;
          this.loading = loading;
          this.products = products;
          this.error = error;
      })


      this.store.dispatch(productsList());




  }

}
