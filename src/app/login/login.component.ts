import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : boolean = false; 

  //u: User = new User();
  u = {
    userName : "",
    password : ""
  };

  constructor(private us : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  authentification(){
    console.log(this.u)
    this.us.auth(this.u).subscribe(
      data =>{
        this.us.userlogs=data.userName
        console.log(data)
        if (data.id > 0) {
          sessionStorage.setItem("connectedUser" , data ); 
          console.log("redirection");
          this.router.navigate(['client'])
        }else{
          this.error = true; 
        }
      } ,
      error => {
        this.error = true; 
      }
    )
  }
}
