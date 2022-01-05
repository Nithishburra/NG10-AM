import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import DemoComponent from './demo.component';
import { PractiseComponent } from './practise.component';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PractiseComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
