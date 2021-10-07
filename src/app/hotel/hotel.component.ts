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
 d ={
  id: 1,
  nom: "Hôtel Marignan Champs-Élysées",
  etoiles: 5,
  adresse: "12 Rue de Marignan, 75008 Paris, France",
  telephone: "01 40 76 34 56",
  email: "hotelmarignan.com",
  ville: "Paris"
}
 
  constructor(private hs : HotelService) { }

  ngOnInit(): void {
    this.hs.loadHotel().subscribe(
      data => {
        this.hotels = data;
        console.log(this.hotels);
      }
    )
  }

}
