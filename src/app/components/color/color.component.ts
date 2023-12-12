import { Component } from '@angular/core';

@Component({
  selector: 'employeeList-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {

  
  color:string[]=['red','green','yellow']

  rColor:string="Red"

  remove(clr:any){
    console.log(clr)
    this.color.splice(this.color.indexOf(clr),1);
   
  }

 
  
}
