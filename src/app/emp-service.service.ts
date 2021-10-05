import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>('http://localhost:3000/name1.json').pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error : HttpErrorResponse){
    console.log("Error");
    return throwError(error.message || "Server error");
  }
}

