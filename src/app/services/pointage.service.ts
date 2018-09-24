import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pointage} from '../models/Pointage';

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  
  Url= 'http://localhost:8080/pointages/index';

  constructor(private http: HttpClient) {}
  findAll():Observable<Pointage[]>{
    return this.http.get<Pointage[]>(this.Url);
  }

}
