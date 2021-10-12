import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationGuard } from '../authentification.guard';
import { User } from '../classes/user';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, public guard : AuthentificationGuard, public us : UserService) {}

  ngOnInit(): void {
  }

  logOut() : void {
    sessionStorage.removeItem("connectedUser");
    this.router.navigate(['login'])
  }
}
