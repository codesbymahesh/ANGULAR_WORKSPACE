import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  //property which receive meessage from parent
@Input() public MessageFromParent:string ='';
@Input() public ProductDetails:any = {};

//this ChildClick event emit the value, but what?below fn OnButtonClick()
@Output() public ChildClick:EventEmitter<string> =new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    
  }
  //when i click on button childclick emit event emit the value
  public OnButtonClick(){
    this.ChildClick.emit('Hello! from child')
  }

}
