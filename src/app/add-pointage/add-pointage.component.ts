import { Component, OnInit } from '@angular/core';
import {Pointage} from '../models/Pointage';
import {PointageService} from '../services/pointage.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-pointage',
  templateUrl: './add-pointage.component.html',
  styleUrls: ['./add-pointage.component.css']
})
export class AddPointageComponent implements OnInit {

  pointage= new Pointage();
  constructor(private pointageService: PointageService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.pointageService.addPointage(this.pointage)
      .subscribe( data =>{
        this.router.navigate(['pointage']);
      });
  }

}
