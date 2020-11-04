import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IResponse } from '../_models/response.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private readonly http: HttpClient) {}

  getEvents(DateRange): Observable<any> {
    const url = `${environment.apiUrl}/calendar-events`;
    // TODO: this is just an example. implement properly
    let params = new HttpParams();
    params = params.append('StartDate', DateRange.StartDate);
    params = params.append('EndDate', DateRange.EndDate);

    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      `Bearer U7cc4IUPkEeYJTV7o39BdAjxyBw42yUUqKXQIaPc/bGgaPCcBnMeIUGqwIjiq96jJglpKRIu8Dw0aod/5quV1Fyw`
    );

    return this.http.get(url, { headers, params }).pipe(
      map((pageData) => {
        console.log(pageData);
        return pageData;
      })
    );
  }


  getEventsId(EventId): Observable<any> {
    const url = `${environment.apiUrl}/calendar-events/`+EventId;
    // TODO: this is just an example. implement properly
  console.log('editdata');
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      `Bearer U7cc4IUPkEeYJTV7o39BdAjxyBw42yUUqKXQIaPc/bGgaPCcBnMeIUGqwIjiq96jJglpKRIu8Dw0aod/5quV1Fyw`
    );

    return this.http.get(url, { headers }).pipe(
      map((pageData) => {
        console.log(pageData);
        return pageData;
      })
    );
  }


}
