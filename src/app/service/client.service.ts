import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { httpOptions } from "../app.variable";
import { Client } from "../classes/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http: HttpClient) { }

  loadClient() : Observable<Client[]> {
    return this.http.get<Client[]>(environment.apiUrl + "client", httpOptions);
  }
    /*loadPatient( search: String ): Observable<Client[]> {
      console.log("chargement des villes");
      let searchCondition = ""
  
      if( search.length > 0 ){
        searchCondition = "?search="+search; 
      }
      return this.http.get<Client[]>( environment.apiUrl  + "patient"+searchCondition , httpOptions );
    }*/
  

  addClient( c : Client ) : Observable<Client> {
    return this.http.post<Client>( environment.apiUrl + "client" , c , httpOptions )
  }

  editClient( c : Client ) : Observable<Client> {
    return this.http.put<Client>( environment.apiUrl + "client/"+c.id , c , httpOptions )
  }

  getClient(id? : number ) : Observable<Client> {
    return this.http.get<Client>(environment.apiUrl + "client/"+id, httpOptions);
  }

  deleteClient(id? : number ) : Observable<Client> {
    return this.http.delete<Client>(environment.apiUrl + "client/"+id, httpOptions);
  }
}