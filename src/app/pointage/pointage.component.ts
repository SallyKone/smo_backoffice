import { Component, OnInit } from '@angular/core';
import {PointageService} from '../services/pointage.service';
import {Pointage} from '../models/Pointage';


@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent implements OnInit {
pointage: Pointage[];

  constructor(private pointageService: PointageService) { }

  ngOnInit() {
    this.pointageService.findAll().subscribe( (data: Pointage[])=>{this.pointage = data; console.log("erreur affichage")});
  }

}
