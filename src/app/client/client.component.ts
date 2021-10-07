import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Client } from '../classes/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @ViewChild('closeaction') closeformelm: any;
  //@ViewChild('modal') modalelm:ElementRef | undefined ;
  
  clients: Client[]=[]

  n: Client = new Client()

  constructor(private cs : ClientService) { }

  ngOnInit(): void {
    this.update()
  }

  update(){
    this.cs.loadClient().subscribe(
      data => {
        this.clients = data;
        console.log(data);
      }
    )
  }

  add(){
    this.n.id=undefined
    this.n.nom=undefined
    this.n.telephone=undefined
    this.n.email=undefined
    this.n.adresse=undefined
  }

  edit(id? : number){
    this.cs.getClient(id).subscribe(
      data =>{
        this.n = data
      }
    )
  }

  submitForm(){
    if(this.n.id==undefined){
      this.cs.addClient(this.n).subscribe(
      data => {
        console.log(data);
        this.closeformelm.nativeElement.click();
        this.update();
        //this.succes = true;
      } ,
      error => {
        console.log(error);
        //this.error = true;
      })
    }
    else {
      this.cs.editClient(this.n).subscribe(
        data => {
          this.closeformelm.nativeElement.click();
          this.update();
          //this.succes = true;
        } ,
        error => {
          console.log(error);
          //this.error = true;
        })
    }
  }

  delete ( id? : number){
    if(confirm ("Etes vous sur ?")){
    this.cs.deleteClient(id).subscribe(
      data => { 
        this.update(); 
      }
    )}
  }

}
