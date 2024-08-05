import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {

public Categories:string[] = []; 

public Products:any[] =[];

public CartItems:any[] =[];

public CartCount:number =0;

public isCartVisible:boolean =false;

public GetCartCount(){
  this.CartCount = this.CartItems.length;
}

public GetCategories(){
  fetch("https://fakestoreapi.com/products/categories")
  .then(response=>response.json())
  .then(data=>{
    data.unshift("all"); //this will add "all" is first item in category
    this.Categories=data;
  })
}
public GetProducts(url:string){
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    this.Products=data;
  })
}

  constructor(){}

  ngOnInit(): void {
    this.GetCategories(); //fn called means when component loads it will initialise all categories

    // this.GetProducts();
    this.GetProducts("https://fakestoreapi.com/products");//on initialise all products must loads so by this url all products load

  }
  public CategoryChanged(e:any){
    // alert(e.target.value );
    if(e.target.value=="all"){
      this.GetProducts("http://fakestoreapi.com/products");
    }
    else{
      this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }

  }
  public AddToCartClick(id:number){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.CartItems.push(data);
      alert(`${data.title}\nAdded to Cart`);
      this.GetCartCount();
    })
  }

  public ToggleCart(){
    this.isCartVisible =(this.isCartVisible==false)?true:false;
  }
  public RemoveItem(i:number){
    let flag = confirm("Are you dure to Delete?");
    if(flag==true)
    this.CartItems.splice(i,1); //i means which index to remove and here 1 means 1 item to remove at once
  this.GetCartCount();//update count of view
  }
}
