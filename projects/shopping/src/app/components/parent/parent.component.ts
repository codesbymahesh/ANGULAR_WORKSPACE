import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  public MessageToChild:string="waiting for messasge"

  public MessageFromChild:string='';

  public ObjectToChild:any={};

  constructor(){}

  ngOnInit(): void {
    
  }
  
  public SendClick(){
    this.MessageToChild = 'Hello from parent..';
    this.ObjectToChild={
     name:'samsung',
     price:'45000'
    }
  }

  public GetMessageFromChild(e:string){
    this.MessageFromChild=e;
  }
}
