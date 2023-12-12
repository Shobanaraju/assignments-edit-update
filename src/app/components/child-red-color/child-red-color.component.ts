import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'employeeList-child-red-color',
  templateUrl: './child-red-color.component.html',
  styleUrls: ['./child-red-color.component.scss']
})
export class ChildRedColorComponent {

  @Input()redParent!:string;
  @Output()delChild = new EventEmitter();



  delete(color:any){

    this.delChild.emit(color)

  }

}
