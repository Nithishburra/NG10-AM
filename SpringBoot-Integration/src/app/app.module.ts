import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import ProductsEffects from './effects/product.effects';
import { productsReducer } from './reducer/product.reduce';
import ProductService from './service/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot({"products":productsReducer})
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
