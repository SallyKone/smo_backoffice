import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employe} from '../models/Employe';
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  addEmploye(employe)
  {
    let body = JSON.stringify(employe);
    return this.http.post(this.UrlP, body, httpOptions);
  }

  updateEmploye(employe) {
           let body = JSON.stringify(employe);
          return this.http.put(this.UrlA + employe.id_employe, body, httpOptions);
       }

  deleteEmploye(employe) {
          return this.http.delete(this.UrlD + employe.id_employe);
       }
}
