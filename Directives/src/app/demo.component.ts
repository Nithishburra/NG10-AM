import { Component } from "@angular/core";
@Component({
    selector:"demo",
    templateUrl:"./demo.component.html"
})

class DemoComponent{
sub:string = "angular";

arr:any[]=[
     
      {'id':1,'sub':'angular','demand':'high'},
      {'id':2,'sub':'reactjs','demand':'low'},
      {'id':3,'sub':'nodejs','demand':'high'},
      {'id':4,'sub':'viewjs','demand':'medium'},
      {'id':5,'sub':'mongodb','demand':'low'}
]

getColor(sub:string):any{
    switch(sub){
        case 'angular':
        return "red";

        case 'reactjs':
            return "green";
    
        case 'nodejs':
            return "pink";

        case 'viewjs':
            return "yellow";

        case 'mongodb':
            return "salmon";
        
            default:
                return "black";
    }
}

}

export default DemoComponent;
