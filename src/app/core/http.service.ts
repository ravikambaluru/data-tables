import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  getUsersData=():Observable<data[]>=>{
    return this.http.get<data[]>('https://jsonplaceholder.typicode.com/users');
  }
}
