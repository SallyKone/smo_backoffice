import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Client} from '../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client= new Client();
  constructor(private clientSercice: ClientService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
  }

  Submit() {
    this.clientSercice.addClient(this.client)
      .subscribe( data => {
        this.router.navigate(['client']);
      });
  }
}
