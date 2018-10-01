import { Component, OnInit } from '@angular/core';
import {Employe} from '../models/Employe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeService} from '../services/employe.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  employe: Employe;
  updateForm: FormGroup

  constructor(private formBuilder: FormBuilder,private router: Router, private employeService: EmployeService) { }

  ngOnInit() {
    let employeId = localStorage.getItem("updateEmployeId");
    if (!employeId){
      alert("Action invalide")
      this.router.navigate(['employe']);
      return;
    }

    this.updateForm = this.formBuilder.group({
      type_employe: ['', Validators.required],
      nom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      typePiece: ['', Validators.required],
      cni: ['', Validators.required],
      fonction: ['', Validators.required],
      domicile: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      photo: []

    });
    this.employeService.findById(+employeId).
    subscribe( data => {
      this.updateForm.setValue(data);
    });
  }

  onSubmit(){
this.employeService.updateEmploye(this.updateForm.value)
  .pipe(first()).subscribe(
    data=> {
      this.router.navigate(['employe']);

    },
      error => {
      alert(error);
      });
  }
}
