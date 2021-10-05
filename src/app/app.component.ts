import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from './emp-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'ErrorHandling';

  public employees:any = [];
  public errorMsg: any;

  constructor(private _service : EmpServiceService){}

  ngOnInit(){
    this._service.getEmployees()
    .subscribe(data => this.employees = data,
         error => this.errorMsg = error);
}
}
