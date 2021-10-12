import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { httpOptions } from "../app.variable";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userlogs : string = ""
    constructor(private http : HttpClient) {}

    auth( u: any) {
        return this.http.post<any>(environment.apiUrl + "login" , u , httpOptions );
    }
}