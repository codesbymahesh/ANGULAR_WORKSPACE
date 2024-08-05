import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //step 3

  username="";
  password="";
  errorMsg="";

  //step 8 inject service from 7th step
  constructor(private auth: AuthService, private router:Router){ }

  ngOnInit(): void {
    
  }
  //step 5
  login() {

    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";

    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } 
    else{
      this.errorMsg ='';
      //step 9
      let res =this.auth.login(this.username, this.password);

      if(res===200){
        this.router.navigate(['home'])
      }
      if(res===403){
        this.errorMsg=" Invalid credentials"
      }
    }
    
  }

}