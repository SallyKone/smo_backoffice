import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Site} from '../models/Site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  Url= 'http://localhost:8080/site/index';

  constructor(private http: HttpClient) { }
  findALL():Observable<Site[]>{
    return this.http.get<Site[]>(this.Url);
  }
}
