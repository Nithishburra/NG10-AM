import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  
  obj:any={
    "uname": "",
    "upwd" : ""
  }
  status:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  myForm():any{
    if(this.obj.uname == "ashokit"&&this.obj.upwd=="ashok"){
       this.status = "Login success"
    }else{
      this.status = "Login failed"
    }
  }

}
