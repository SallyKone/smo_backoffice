import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pointage} from '../models/Pointage';

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  
  Url= 'http://localhost:8080/pointages/index';
  UrlPointageId= 'http://localhost:8080/pointages/getPointage/{numero}';
  UrlAddPointage= 'http://localhost:8080/pointages/addPointage';
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

  addPointage(pointage: Pointage): Observable<Pointage[]>
  {
    return this.http.post<Pointage[]>(this.UrlAddPointage, Pointage);
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
