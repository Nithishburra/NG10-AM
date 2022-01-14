import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { NgDocheckComponent } from './ng-docheck.component';
import { OninitComponent } from './oninit.component';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { MComponent } from './m.component';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';
import { XComponent } from './x.component';
import { YComponent } from './y.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NgDocheckComponent,
    OninitComponent,
    AComponent,
    BComponent,
    MComponent,
    Comp1Component,
    Comp2Component,
    XComponent,
    YComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [YComponent]
})
export class AppModule { }

