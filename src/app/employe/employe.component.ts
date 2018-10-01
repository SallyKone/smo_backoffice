import { Component, OnInit } from '@angular/core';
import {Employe} from '../models/Employe';
import {EmployeService} from '../services/employe.service';
import {Router} from '@angular/router';
import {error} from 'selenium-webdriver';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employe: Employe[];

  constructor(private router: Router, private employeService: EmployeService ) { }

  getFoods() {}

  ngOnInit() {
      this.employeService.findALL().subscribe((data: Employe[])=>{this.employe = data; console.log('employé ajouter')});
  }

  deleteEmploye(employe) {
      if (confirm("Are you sure you want to delete " + employe.id_employe + "?")) {
           this.employeService.deleteEmploye(employe).subscribe(
               data => {
                   // refresh the list
                     this.employe;
                 return true;
               },
               error => {
                  console.log("Error deleting food!");

                }
         );
          }
    }

  addEmploye(): void {
    this.router.navigate(['add-employe']);
  };

  updateEmploye(employe): void {
    this.router.navigate(['update-employe']);

  }


}
