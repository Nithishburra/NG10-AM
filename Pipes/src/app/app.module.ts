import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaiPipe } from './sai.pipe';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaiPipe,
    FormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
