import { Component, OnInit } from '@angular/core';
import { concatMap, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    of(1,2,3,4,5,6).pipe(mergeMap(num => of('Num.....${num}'))).subscribe(console.log)


    //of(1,2,3).pipe(concatMap((num)=> of(`Num....${num+1}`))).subscribe(console.log)  
  
  }


}