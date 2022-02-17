import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import ProductsEffects from './effects/product.effect';
import { productsReducer } from './reducer/products.reducer';
import ProductsService from './service/product.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot({"products":productsReducer})
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
