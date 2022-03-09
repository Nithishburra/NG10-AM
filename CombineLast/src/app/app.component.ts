import { Component } from '@angular/core';
import { combineLatest, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CombineLast';
  ob1$: any;
  ob2$: any;

  ngOnInit(){
    this.ob1$ = timer(1000,2000);
    this.ob2$ = timer(2000,4000);

      combineLatest([this.ob1$,this.ob2$]).subscribe((posRes:any)=>{
        console.log(posRes);
      })
  
  }
  
}
