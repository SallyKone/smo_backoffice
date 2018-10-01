import { Component, OnInit } from '@angular/core';
import {SiteService} from '../services/site.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Site} from '../models/Site';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {

  site= new Site();
  constructor(private siteService: SiteService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.siteService.addSite(this.site)
      .subscribe(data =>{
      this.router.navigate(['site']);
    });
  }

}
