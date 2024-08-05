import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  public Users:any[]= [
    {UserId:'john'},
    {UserId:'john12'},
    {UserId:'john123'},
    {UserId:'david'}
  ]
  
  public UserMessage:string='';
  public IsUserValid:boolean=false;
  public IsUserInvalid:boolean=false;
  public ShowCapsWarn:boolean=false;
  public ShowCityError:boolean=false;

    constructor(){}

    ngOnInit():void{

    }

    public VerifyUserId(e:any){
      for(var user of this.Users){
        if(user.UserId==e.target.value){
          this.UserMessage='User Id taken -try another';
          this.IsUserValid=false;
          this.IsUserInvalid=true;
          break;
        }
        else{
          this.UserMessage='User Id available';
          this.IsUserValid=true;
          this.IsUserInvalid=false;

        }
      }
    }
    //it will hide the meesage once  you finished
    public HideUserMessage(){
      this.UserMessage='';
    }
    
    public VerifyCaps(e:any){
      if(e.keyCode>=65 && e.keyCode<=90){
        this.ShowCapsWarn=true;
      }
      else{
        this.ShowCapsWarn=false;
      }
    }
    public VerifyCity(e:any){
      if(e.target.value=='-1'){
        this.ShowCityError=true;
      }else{
        this.ShowCityError=false;
      }
    }

}
