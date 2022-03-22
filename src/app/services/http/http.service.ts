import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient) { }

  public get(urlString: string): Observable<any> {
       return this.http.get(urlString);
  };

}