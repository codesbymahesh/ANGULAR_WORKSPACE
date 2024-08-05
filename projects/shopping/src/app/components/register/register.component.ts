import { Component, OnInit } from '@angular/core';
//step3, import captcha service which we have created 
import { CaptchaService } from '../../services/captcha.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  //at the time of creating compo we have to inject service into it so we have to write it in constructor

  //constr purpose ->it defines the action to perform at the time of instantiation

  //now the parameter(captcha) which you defined in constructor is accesible in constructor itself only, so to accesible it in entire class or outside also so, make it public /private

  // step 4
  public code :string ='';

   //step5
  constructor(private captcha:CaptchaService){
   
  }

  ngOnInit(): void {
    //on initialisation, step 6
    this.code =this.captcha.GenerateCode();
  }
  public ChangeCode(){
    //this will refresh annd generate new code  when you click on refresh button
    this.code = this.captcha.GenerateCode();
  }

}
