import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  //step 1

  public Product:any ={
    Name:'Samsung TV',
    Mfg: new Date("2022-02-11"),
    Price:56000.40
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
