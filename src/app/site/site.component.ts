import { Component, OnInit } from '@angular/core';
import {SiteService} from '../services/site.service';
import {Site} from '../models/Site';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  site: Site[];

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.findALL().subscribe((data: Site[])=>{this.site = data; console.log('erreur affichage')});
  }

}
