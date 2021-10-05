import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Array<Client> = [];

  constructor(private cs : ClientService) { }

  ngOnInit(): void {
    this.cs.loadPatient().subscribe(
      data => {
        this.clients = data;
        console.log(data);
      }
    )
  }

}
