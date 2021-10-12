import { DatePipe } from '@angular/common';
import { HttpEvent } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Client } from '../classes/client';
import { Hotel } from '../classes/hotel';
import { Resa } from '../classes/resa';
import { ClientService } from '../service/client.service';
import { HotelService } from '../service/hotel.service';
import { ResaService } from '../service/resa.service';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.component.html',
  styleUrls: ['./resa.component.css']
})
export class ResaComponent implements OnInit {

  search :string = ""
  dateparadox = false
  selectedUser = null;

  @ViewChild('closeaction') closeformelm: any;
  
  resas: Array<Resa> = [];
  hotels: Array<Hotel> = [];
  clients: Array<Client> = [];

  fclient:boolean=false
  fhotel:boolean=false
  fchambre:boolean=false

  n: Resa = new Resa()
  ds: Date = new Date()
  de: Date = new Date()
  onError: any;
  constructor(private rs : ResaService, private hs: HotelService, private cs: ClientService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.update()
    
  }
  
  update(){
    this.rs.loadResa().subscribe(
      data => {
        this.resas = data;
        console.log(data);
      }
    )
    this.hs.loadHotel().subscribe(
      data => {
        console.log(data);
        this.hotels = data;
      }
    )
    this.cs.loadClient().subscribe(
      data => {
        console.log(data);
        this.clients = data;
      }
    )
  }

  add(){
    this.fclient = false
    this.fhotel = false
    this.fchambre=false
    this.dateparadox = false

    // to set date by default with 1 days gap on form
    let today = new Date()
    today.toISOString().split('T')[0]
    let todayafter = new Date()
    todayafter.setDate(todayafter.getDate() + 1);

    //
    this.n.id=undefined
    this.n.client=undefined
    this.n.hotel=undefined
    this.n.dateStart=today
    this.n.dateEnd=todayafter
    this.n.chambre=undefined
    console.log(this.n.dateStart)
    console.log(this.n.dateEnd)
  }

  edit(id? : number){
    this.fclient = false
    this.fhotel = false
    this.fchambre=false
    this.dateparadox = false
    this.rs.getResa(id).subscribe(
      data =>{
        this.n = data
      }
    )
  }

  submitForm(){
    if(this.n.client == undefined){
      this.fclient = true
    }
    if(this.n.hotel == undefined){
      this.fhotel = true
    }
    if(this.n.chambre == undefined || this.n.chambre==0){
      this.fchambre=true
    }
    else {
        if(this.n.id==undefined){
          this.rs.addResa(this.n).subscribe(
          data => {
            console.log(data);
            this.closeformelm.nativeElement.click();
            this.update();
            //this.succes = true;
          } ,
          error => {
            this.dateparadox = true
          })
        }
        else {
          let latest_date =this.datepipe.transform(this.n.dateStart, 'yyyy-MM-dd');
          //this.n.dateStart = this.n.dateStart?.toISOString().split('T')[0]
          console.log(latest_date);
          //this.n.dateStart =latest_date
          //console.log(this.datePipe.transform(this.n.dateStart, 'yyyy-MM-dd'))
          this.rs.editResa(this.n).subscribe(
            data => {
              this.closeformelm.nativeElement.click();
              //this.update();
              if(this.search.length>1) {
                this.rs.searchFilter(this.search).subscribe (
                  data => {
                    this.resas = data;
                    console.log(data);
                  })
                this.hs.loadHotel().subscribe (
                  data => {
                    console.log(data);
                    this.hotels = data;
                  })
                this.cs.loadClient().subscribe (
                  data => {
                    console.log(data);
                    this.clients = data;
                  })
              }else {
                this.update();
              }
              //this.succes = true;
            } ,
            error => {
              console.log(error);
              this.dateparadox = true
            })
        }
    }
  }

  delete ( id? : number){
    if(confirm ("Etes vous sur ?")){
    this.rs.deleteResa(id).subscribe(
      data => { 
        this.update(); 
      }
    )}
  }

  checkSelect(a : any, b: any) : boolean {
    return a != undefined && b != undefined && a.id == b.id;
  }

  ClientFilter(event : string){
    console.log("This filter is OK : "+event)
    this.search = event
    if(this.search.length>1) {
      this.rs.searchFilter(this.search).subscribe (
        data => {
          this.resas = data;
          console.log(data);
        })
      this.hs.loadHotel().subscribe (
        data => {
          console.log(data);
          this.hotels = data;
        })
      this.cs.loadClient().subscribe (
        data => {
          console.log(data);
          this.clients = data;
        })
    }else {
      this.update();
    }
  }

  callType(e : any){
    console.log(e)
    if(this.n.client!=undefined) this.fclient=false
    if(this.n.hotel!=undefined) this.fhotel=false
    if(e!=undefined){
      e=Number(e)
      if(e>0){
        this.fchambre=false
      }
    } 
  }
}
