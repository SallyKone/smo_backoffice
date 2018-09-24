import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {Client} from '../models/Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.findALL().subscribe((data: Client[]) =>{this.client = data; console.log('message erreur')});
  }

}
