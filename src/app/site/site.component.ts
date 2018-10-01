import { Component, OnInit } from '@angular/core';
import {SiteService} from '../services/site.service';
import {Site} from '../models/Site';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  site: Site[];

  constructor(private siteService: SiteService, private router: Router) { }

  ngOnInit() {
    this.siteService.findALL().subscribe((data: Site[])=>{this.site = data; console.log('site enregistré')});
  }
  addSite(): void {
    this.router.navigate(['add-site']);
  };

}
