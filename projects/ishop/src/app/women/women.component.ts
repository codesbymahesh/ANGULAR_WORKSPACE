import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit  {

  public Products:any[] = [];

  constructor(){ }

  ngOnInit(): void {
     fetch("http://fakestoreapi.com/products/category/women's clothing")
     .then(Response=>Response.json())
     .then(data=>{
      this.Products=data
     })
  }
}
