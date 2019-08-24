import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TribeInfo} from './TribeInfo';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class TribeDataService {

  public url = '/api/teamData';//'/assets/jsonData/tribeInfo.json';
  constructor(private http: HttpClient) { }

  getData(): Observable<TribeInfo[]> {
    return this.http.get<TribeInfo[]>(this.url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
