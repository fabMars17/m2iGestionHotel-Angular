import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { httpOptions } from "../app.variable";
import { Hotel } from "../classes/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor( private http: HttpClient) { }

  loadHotel() : Observable<Hotel[]> {
    return this.http.get<Hotel[]>(environment.apiUrl + "hotel", httpOptions);
  }
    /*loadPatient( search: String ): Observable<Client[]> {
      console.log("chargement des villes");
      let searchCondition = ""
  
      if( search.length > 0 ){
        searchCondition = "?search="+search; 
      }
      return this.http.get<Client[]>( environment.apiUrl  + "patient"+searchCondition , httpOptions );
    }*/
  

  addHotel( c : Hotel ) : Observable<Hotel> {
    return this.http.post<Hotel>( environment.apiUrl + "hotel" , c , httpOptions )
  }

  editHotel( c : Hotel ) : Observable<Hotel> {
    return this.http.put<Hotel>( environment.apiUrl + "hotel/"+c.id , c , httpOptions )
  }

  getHotel(id? : number ) : Observable<Hotel> {
    return this.http.get<Hotel>(environment.apiUrl + "hotel/"+id, httpOptions);
  }

  deleteHotel(id? : number ) : Observable<Hotel> {
    return this.http.delete<Hotel>(environment.apiUrl + "hotel/"+id, httpOptions);
  }
}