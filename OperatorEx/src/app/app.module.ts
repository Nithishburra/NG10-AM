import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { MergemapComponent } from './mergemap/mergemap.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchmapComponent,
    MergemapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MergemapComponent]
})
export class AppModule { }
