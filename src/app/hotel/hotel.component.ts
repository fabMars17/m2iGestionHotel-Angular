import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotel } from '../classes/hotel';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @ViewChild('closeaction') closeformelm: any;
  
  hotels: Array<Hotel>=[];
 
  n: Hotel = new Hotel()
  
  constructor(private hs : HotelService) { }

  ngOnInit(): void {
    this.hs.loadHotel().subscribe(
      data => {
        this.hotels = data;
        console.log(this.hotels);
      }
    )
  }

  update(){
    this.hs.loadHotel().subscribe(
      data => {
        this.hotels = data;
        console.log(data);
      }
    )
  }

  add(){
    this.n.id=undefined
    this.n.nom=undefined
    this.n.etoiles=undefined
    this.n.telephone=undefined
    this.n.email=undefined
    this.n.adresse=undefined
    this.n.ville=undefined
  }

  edit(id? : number){
    this.hs.getHotel(id).subscribe(
      data =>{
        this.n = data
      }
    )
  }

  submitForm(){
    
      if(this.n.id==undefined){
        this.hs.addHotel(this.n).subscribe(
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
        this.hs.editHotel(this.n).subscribe(
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
    this.hs.deleteHotel(id).subscribe(
      data => { 
        this.update(); 
      }
    )}
  }

}
