import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AshokITDirective } from './ashok-it.directive';
import { AshokITNGDirective } from './ashok-itng.directive';

@NgModule({
  declarations: [
    AppComponent,
    AshokITDirective,
    AshokITNGDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
