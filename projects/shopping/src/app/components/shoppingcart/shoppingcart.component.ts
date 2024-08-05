import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {

  //step 2 , these will store the data coming from api and also data type means what type of data is coming
public Categories:string[] = []; 

// step 6 ,we now want all products
public Products:any[] =[];

//step 12.0
public CartItems:any[] =[];
public CartCount:number =0;

//step 15
public isCartVisible:boolean =false;

//step 12.1 how many items in cart
public GetCartCount(){
  this.CartCount = this.CartItems.length;
}

// step 3
public GetCategories(){
  fetch("https://fakestoreapi.com/products/categories")
  .then(response=>response.json())
  .then(data=>{
    data.unshift("all"); //this will add "all" is first item in category
    this.Categories=data;
  })
}

//step 7 
//when prduct show acc to category so for that we have to load this method so many times, so url will change acc to category
public GetProducts(url:string){
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    this.Products=data;
  })
}

  constructor(){}

  ngOnInit(): void {

    //step 4
    this.GetCategories(); //fn called means when component loads it will initialise GetCategories()

    //step 7.1 - load on initialisation
    
    this.GetProducts("https://fakestoreapi.com/products");//on initialise all products must loads so by this url all products load

  }
  //step 10 
  public CategoryChanged(e:any){
    // alert(e.target.value );
    if(e.target.value=="all"){
      this.GetProducts("http://fakestoreapi.com/products");
    }
    else{
      this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }

  }

  //step 12.2
  public AddToCartClick(id:number){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      //step 13 push that item in cart
      this.CartItems.push(data);
      alert(`${data.title}\nAdded to Cart`);
      //cart count will be updated
      this.GetCartCount();
    })
  }

  //step 17
  public ToggleCart(){
    this.isCartVisible =(this.isCartVisible==false)?true:false;
  }

  //step 19 -last
  public RemoveItem(i:number){
    let flag = confirm("Are you sure to Delete?");
    if(flag==true)
    this.CartItems.splice(i,1); //i means which index to remove and here 1 means 1 item to remove at once
  this.GetCartCount();//update count of view
  }
}
