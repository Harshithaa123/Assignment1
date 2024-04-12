import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: `
    h1{
      color:blue;
    }
    .text-sucess{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-family:arial;
    }
  `
})
export class EmployeeComponent {
  public name="John "  //property
  public isDisabled=false; 
  public hasError=false;
  public danger=false;
    greetFunc(){
      return "     Hello "+this.name;
    }
    public messsgeClasses ={
      "text-succes": !this.isDisabled,
      "text-danger" :this.hasError,
      "text-special" : !this.danger
    }
}
