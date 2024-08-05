import { Component, OnInit } from '@angular/core';
import { productContract } from '../../contracts/ProductContract';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  //one way binding
  // public Name:string = "mahi"; //data

  //two way binding
  // public Product:productContract ={
  //   Name:"",
  //   Price:0,
  //   Stock:false,
  //   City:"select a city"
  // }

  
    constructor(){ }

    ngOnInit(): void {
      
    }
}

