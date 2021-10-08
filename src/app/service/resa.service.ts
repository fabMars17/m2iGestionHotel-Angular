import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { httpOptions } from "../app.variable";
import { Resa } from "../classes/resa";

@Injectable({
  providedIn: 'root'
})
export class ResaService {

  constructor( private http: HttpClient) { }

  loadResa() : Observable<Resa[]> {
    return this.http.get<Resa[]>(environment.apiUrl + "resa", httpOptions);
  }

  searchFilter( search: String ): Observable<Resa[]> {
    console.log("Filtrage par Nom de client");
    let searchCondition = ""
    
    searchCondition = "?search="+search; 
    
    return this.http.get<Resa[]>( environment.apiUrl  + "resa"+searchCondition , httpOptions );
  }
    /*loadPatient( search: String ): Observable<Client[]> {
      console.log("chargement des villes");
      let searchCondition = ""
  
      if( search.length > 0 ){
        searchCondition = "?search="+search; 
      }
      return this.http.get<Client[]>( environment.apiUrl  + "patient"+searchCondition , httpOptions );
    }*/
  

  addResa( c : Resa ) : Observable<Resa> {
    return this.http.post<Resa>( environment.apiUrl + "resa" , c , httpOptions )
  }

  editResa( c : Resa ) : Observable<Resa> {
    return this.http.put<Resa>( environment.apiUrl + "resa/"+c.id , c , httpOptions )
  }

  getResa(id? : number ) : Observable<Resa> {
    return this.http.get<Resa>(environment.apiUrl + "resa/"+id, httpOptions);
  }

  deleteResa(id? : number ) : Observable<Resa> {
    return this.http.delete<Resa>(environment.apiUrl + "resa/"+id, httpOptions);
  }
}