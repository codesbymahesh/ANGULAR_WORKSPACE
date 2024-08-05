import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public Products:any[] = [];

  constructor(){ }

  ngOnInit(): void {
     fetch("http://fakestoreapi.com/products")
     .then(Response=>Response.json())
     .then(data=>{
      this.Products=data
     })
  }

}
