import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  num:number = 0;

  obj:any={
    "Uname":"",
    "Upwd" : ""
  };
   
    login():any{
      if(this.obj.Uname == "ashokit"&&this.obj.Upwd == "ashok12"){
        alert("Login success");
      }else{
        alert("Login failure");
      }
    }


    arr:any[] = [
       {"p_id":111,"p_name":"p_one","p_cost":1000},
       {"p_id":222,"p_name":"p_two","p_cost":2000},
       {"p_id":333,"p_name":"p_three","p_cost":3000},
       {"p_id":444,"p_name":"p_four","p_cost":4000},
       {"p_id":555,"p_name":"p_five","p_cost":5000},

 ];



}
