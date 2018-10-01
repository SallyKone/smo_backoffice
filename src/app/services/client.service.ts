import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/Client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  Url= 'http://localhost:8080/clients/index';
  UrlClientId= 'http://localhost:8080/clients/getClient/{id_client}';
  UrlAddClient= 'http://localhost:8080/clients/addClient';
  UrlUpdateClient= 'http://localhost:8080/clients/updateClient/{id_client}';
  UrlDeleteClient= 'http://localhost:8080/clients/deleteClient/{id_client}';


  constructor(private http: HttpClient) { }
    findALL():Observable<Client[]>{
    return this.http.get<Client[]>(this.Url);
    }

    findById(id_client: number): Observable<Client[]>
    {
      return this.http.get<Client[]>(this.UrlClientId + '/' + id_client);
    }

    addClient(client)
    {
      let body = JSON.stringify(client);
      return this.http.post(this.UrlAddClient, body, httpOptions );
    }

    updateClient(client: Client): Observable<Client[]>
    {
      return this.http.put<Client[]>(this.UrlUpdateClient +'/'+ client.id_client, Client);
    }
    deleteClient(id_client: number): Observable<Client[]>
    {
      return this.http.delete<Client[]>(this.UrlDeleteClient + '/'+ id_client);
    }

}
