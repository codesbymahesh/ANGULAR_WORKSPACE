import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //step 13.0 ,step 16
 
  constructor(private router:Router, private auth:AuthService){}

  ngOnInit(): void {
    
  }

  // step 13.1
  goToHome(){
    this.router.navigate(['home'])

  }

  // step 17
  logout(){
    this.auth.logout();
  }
}
