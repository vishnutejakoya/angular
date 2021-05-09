import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Router } from '@angular/router';

@Injectable()
export class HomeService {

  private url: string = 'api/sampleData/WeatherForecasts/';

 
  constructor(private http: Http) { }

  getCustomersSummary(): Observable<any> {
    return this.http.get(this.url);      
  }
  

}
