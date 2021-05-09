import { Component, OnInit, ElementRef, Input,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {
 
  constructor(private http: HttpClient) {
    
  }
  employee: Employee[] = [];
  Fname: string = "";
  Description : string = "";
  private url: string = 'http://localhost:54697/api/Employee/GetEmpData';
  private saveurl: string = 'http://localhost:54697/api/Employee/SaveEmployee/';
  GetEmployeeDetails() {
    //alert("Ok");
    this.http.get(this.url).subscribe((data: any) => { this.employee = data; });
    //alert(.FName);
  }
 
  SaveEmployeeData(EmployeeDetails) {
    //alert(employee.FName);
    let employee: Employee = {
      FName: this.Fname,
      Description: this.Description
    }
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let result = this.http.post(this.saveurl, employee).subscribe();
    return result;
    }
}

  class Employee {
   FName: string;
   Description:string

}
