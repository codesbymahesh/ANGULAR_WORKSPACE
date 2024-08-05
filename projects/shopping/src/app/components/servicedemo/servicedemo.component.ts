import { Component, OnInit } from '@angular/core';
import { FakstoreapiService } from '../../services/fakstoreapi.service';

@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrls: ['./servicedemo.component.css']
})
export class ServicedemoComponent implements OnInit {

  //step 1
  public Categories:string[] =[];
  public Products:any[] =[];


  //step 2 -inject service here
  constructor(private api:FakstoreapiService){

  }

  ngOnInit(): void {
    //step 3 - (async methods are called by using subscribe() -> subscribe will  read everydata coming from method and store that data into categories
    this.api.GetCategories().subscribe(data=> this.Categories=data)
    this.api.GetProducts().subscribe(data=> this.Products=data)
  }
}
