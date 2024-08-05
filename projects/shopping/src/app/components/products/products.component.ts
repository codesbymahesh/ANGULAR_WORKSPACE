import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public Products:any[]=[];

  public ElectronicsCount:number =0;
  public JeweleryCount:number =0;
  public MensCount:number =0;
  public WomensCount:number =0;

  //api is changing when we select category so we did it like url
  public LoadProducts(url:string){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.Products=data;
      
    })
  }

  constructor(){

  }

  ngOnInit(): void {
    this.LoadProducts('http://fakestoreapi.com/products');
    //how many electronics item are there.? let see
    fetch('http://fakestoreapi.com/products/category/electronics')
    .then(response=>response.json())
    .then(data=>{
      this.ElectronicsCount=data.length;
    })
    fetch('http://fakestoreapi.com/products/category/jewelery')
    .then(response=>response.json())
    .then(data=>{
      this.JeweleryCount=data.length;
    })
    fetch("http://fakestoreapi.com/products/category/men's clothing")
    .then(response=>response.json())
    .then(data=>{
      this.MensCount=data.length;
    })
    fetch("http://fakestoreapi.com/products/category/electronics/women's clothing")
    .then(response=>response.json())
    .then(data=>{
      this.WomensCount=data.length;
    })
  }

  //STEP 3, fn will collect the category name
  public GetCategoryName(e:string ){
    //step5, load api and pass ${e} category name
    this.LoadProducts(`http://fakestoreapi.com/products/category/${e}`);
  }

}
