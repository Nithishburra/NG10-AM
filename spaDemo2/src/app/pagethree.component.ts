import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pagethree',
  templateUrl: './pagethree.component.html',
  styles: [
  ]
})
export class PagethreeComponent implements OnInit {

  var_three:String = "page_three";
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.var_three=this.route.snapshot.params["x"]+"........."+this.route.snapshot.params["y"]+".........."+this.route.snapshot.params["z"];
    
  }

}
