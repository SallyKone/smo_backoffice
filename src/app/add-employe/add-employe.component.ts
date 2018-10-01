import { Component, OnInit } from '@angular/core';
import {Employe} from '../models/Employe';
import {EmployeService} from '../services/employe.service';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
   employe = new Employe();
  constructor(private employeService: EmployeService, private formBuilder: FormBuilder,private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit() {
    this.employeService.addEmploye(this.employe)
      .subscribe( data => {
        this.router.navigate(['employe']);
      });

  }

}
