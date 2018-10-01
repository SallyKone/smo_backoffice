import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Site} from '../models/Site';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  Url= 'http://localhost:8080/site/index';
  UrlIdSite= 'http://localhost:8080/site/getSite/{idSite}';
  UrlAddSite= 'http://localhost:8080/site/addSite';
  UrlUpdateSite= 'http://localhost:8080/site/updateSite/{idSite}';
  UrlDeleteSite= 'http://localhost:8080/site/deleteSite/{idSite}';

  constructor(private http: HttpClient) { }

  findALL():Observable<Site[]>{
    return this.http.get<Site[]>(this.Url);
  }

  findById(idSite: number): Observable<Site[]>
  {
    return this.http.get<Site[]>(this.UrlIdSite +'/'+ idSite);
  }

  addSite(site)
  {
    let body = JSON.stringify(site)
    return this.http.post(this.UrlAddSite, body, httpOptions);
  }

  updateSite(site: Site): Observable<Site[]>
  {
    return this.http.put<Site[]>(this.UrlUpdateSite + '/' + site.idSite, Site );
  }

  deleteSite(idSite: number): Observable<Site[]>
  {
    return this.http.delete<Site[]>(this.UrlDeleteSite +'/'+ idSite);
  }
}
