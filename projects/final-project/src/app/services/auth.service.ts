import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // step 14
  constructor(private router:Router) { }

  //step 7

  login(uname:string, pword:string){

    if(uname==='mahi' && pword==='1234'){
      return 200;
    }
    else{
      return 403;
    }
  }

  //step 15
  logout(){

    this.router.navigate(['login'])
  }
}
