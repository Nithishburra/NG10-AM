import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import ProductModel from './model/product.model';
import { productsSelector } from './selector/product.selector';
import ProductsState from './state/product.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading:boolean;
  products:ProductModel[];
  error:string;


  constructor(private store:Store<ProductsState>){
    this.loading = false;
    this.products = [];
    this.error = "";
  }




  ngOnInit(){
      this.store.select(productsSelector).subscribe((posRes:ProductsState)=>{
          const {error,products,loading} = posRes;
          console.log(posRes);
          this.loading = loading;
          this.products = products;
          this.error = error; 
      },(errRes:any)=>{
          console.log(errRes);
      });

      this.store.dispatch(getProducts());

  }

}
  

function getProducts(): any {
  throw new Error('Function not implemented.');
}

