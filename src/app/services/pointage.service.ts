import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pointage} from '../models/Pointage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  
  Url= 'http://localhost:8080/pointages/index';
  UrlPointageId= 'http://localhost:8080/pointages/getPointage/{numero}';
  UrlPointageAdd= 'http://localhost:8080/pointages/addPointage';
  UrlUpdatePointage= 'http://localhost:8080/pointages/updatePointage/{numero}';
  UrlDeletePointage= 'http://localhost:8080/pointages/deletePointage/{numero}';

  constructor(private http: HttpClient) {}
  findAll():Observable<Pointage[]>{
    return this.http.get<Pointage[]>(this.Url);
  }
  findById(numero: number): Observable<Pointage[]>
  {
    return this.http.get<Pointage[]>(this.UrlPointageId + '/' + numero);
  }

  addPointage(pointage)
  {
    let body = JSON.stringify(pointage)
    return this.http.post(this.UrlPointageAdd, body, httpOptions);
  }

  updatePointage(pointage: Pointage): Observable<Pointage[]>
  {
    return this.http.put<Pointage[]>(this.UrlUpdatePointage +'/'+ pointage.numero, Pointage);
  }

  deletePointage(numero: number): Observable<Pointage[]>

  {
    return this.http.delete<Pointage[]>(this.UrlDeletePointage +'/'+ numero);
  }
}
