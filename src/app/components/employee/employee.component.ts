import { Component } from '@angular/core';
import { Details } from 'src/app/interfaces/Details';

@Component({
  selector: 'employeeList-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  myMovie="Run"

  showEdit = false;
  editTable=false;
  empDe:any;

  employeeDetails:Details[] = [{
    employeeId:" 12 ",
    firstName: "sai",
    lastName: "vignesh",
    dob:"13-09-2000",
    emailId:"saivignesh",
    salary:20000,
    
    
  }
];

  constructor(){

  }

  change(){
    this.myMovie="Leo"
  }

  EditEmp(employeeDetails:Details){

   
    this.empDe = employeeDetails 

    console.log(this.empDe)
    console.log("edit")
    this.showEdit = true;
  }

  // UpdateEmp(id:any,fname:any,lname:any,salary:any,dob:any,email:any){
  //   this.employeeDetails.push(
  //     {
  //       "employeeId" :id,
  //       "firstName":fname ,
  //       "lastName": lname,
  //       "dob":dob,
  //       "emailId":email,
  //       "salary":salary,

  //     })
    

  //   console.log("update")
  //   console.log(this.employeeDetails)
  //   this.empDe =null;
    
  //   this.showEdit = false;
    
    
  // }

  UpdateEmp(){
  if (this.empDe) {
    // Implement the logic to update the employee data on the client-side.
    const index = this.employeeDetails.findIndex(e => e.employeeId === this.empDe.id);
    if (index !== -1) {
      this.employeeDetails[index] = { ...this.empDe };
    }
  }
  this.editTable=true;

  this.showEdit = false;
}

}
