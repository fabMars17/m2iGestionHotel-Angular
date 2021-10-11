import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor( private router : Router ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    if( sessionStorage.getItem( "connectedUser" ) ) // l'utilisateur est déjà connecté
      return true;

    this.router.navigate(['login']);
    return false;
  }
  
  isConnected() : Boolean {
    if( sessionStorage.getItem( "connectedUser" ) )
      return true; 
    else
      return false; 
  }
}