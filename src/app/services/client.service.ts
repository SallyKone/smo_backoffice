import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  Url= 'http://localhost:8080/clients/index';

  constructor(private http: HttpClient) { }
    findALL():Observable<Client[]>{
    return this.http.get<Client[]>(this.Url);
    }
}
