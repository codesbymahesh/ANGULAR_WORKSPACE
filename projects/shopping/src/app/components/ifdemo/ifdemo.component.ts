import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit{

  public ViewName:string ="basic";

  constructor() {}

  ngOnInit(): void {
    
  }
  //when we click on anybutton changeview event i activate and and button details send through $event argu and that received here in event argu and that is passed in this.ViewName...and this again passed to [ngSwitch]=viewName
  public ChangeView(event:any){
      this.ViewName = event.target.name;
  }
}
