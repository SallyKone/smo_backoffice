import { Component, OnInit } from '@angular/core';
import {PointageService} from '../services/pointage.service';
import {Pointage} from '../models/Pointage';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent implements OnInit {
pointage: Pointage[];

  constructor(private pointageService: PointageService, private router: Router) { }

  ngOnInit() {
    this.pointageService.findAll().subscribe( (data: Pointage[])=>{this.pointage = data; console.log("Pointage enregistré")});
  }
  addPointage(): void{
    this.router.navigate(['add-pointage']);
  };

}
