import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import Component1 from './comp1.component';
import Component2 from './comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
