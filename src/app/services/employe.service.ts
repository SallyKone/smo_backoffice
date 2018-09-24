import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employe} from '../models/Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  Url= 'http://localhost:8080/employes/home';

  constructor(private http: HttpClient) { }
  findALL():Observable<Employe[]>{
    return this.http.get<Employe[]>(this.Url);
  }
}
