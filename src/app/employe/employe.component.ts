import { Component, OnInit } from '@angular/core';
import {Employe} from '../models/Employe';
import {EmployeService} from '../services/employe.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employe: Employe[];

  constructor(private employeService: EmployeService ) { }

  ngOnInit() {
      this.employeService.findALL().subscribe((data: Employe[])=>{this.employe = data; console.log('erreur affichage')});
  }


}
