import { Component, OnInit } from '@angular/core';
import { Hotel } from '../classes/hotel';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Array<Hotel>=[];

  constructor(private hs : HotelService) { }

  ngOnInit(): void {
    this.hs.loadHotel().subscribe(
      data => {
        this.hotels = data;
        //console.log(data);
        console.log(this.hotels);
      }
    )
  }

}
