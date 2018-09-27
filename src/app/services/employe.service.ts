import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employe} from '../models/Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  Url= 'http://localhost:8080/employes/home';
  UrlId= 'http://localhost:8080/employes/getEmploye/{id_employe}';
  UrlP= 'http://localhost:8080/employes/addEmploye';
  UrlA= 'http://localhost:8080/employes/updateEmploye/{id_employe}';
  UrlD= 'http://localhost:8080/employes/deleteEmploye/{id_employe}';

  constructor(private http: HttpClient) { }
  findALL():Observable<Employe[]>
  {
    return this.http.get<Employe[]>(this.Url);
  }

  findById(id_employe: number): Observable<Employe[]>
  {
    return this.http.get<Employe[]>(this.UrlId + '/' + id_employe) ;
  }

  addEmploye(employe: Employe): Observable<Employe>
  {
    return this.http.post<Employe>(this.UrlP, Employe);
  }

  updateEmploye(employe: Employe): Observable<Employe>
  {
    return this.http.put<Employe>(this.UrlA + '/' + employe.id_employe, employe);
  }

  deleteEmploye(id_employe: number): Observable<Employe>
  {
    return this.http.delete<Employe>(this.UrlD + '/' + id_employe);
  }
}
