import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  public Products:any[] = [];

  constructor(){ }

  ngOnInit(): void {
     fetch("http://fakestoreapi.com/products/category/men's clothing")
     .then(Response=>Response.json())
     .then(data=>{
      this.Products=data
     })
  }

}
