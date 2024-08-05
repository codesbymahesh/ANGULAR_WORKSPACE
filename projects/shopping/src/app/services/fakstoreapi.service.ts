import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakstoreapiService {

  //step 1- in our service we have to use httpclientservice to access all http things
  constructor(private http:HttpClient) { }

  //step 2 -observable is rxjs member , this will make this async , it should be return in string array format
  public GetCategories():Observable<string[]>{
    //earlier we were using fetch but now,
    return this.http.get<string[]>('http://fakestoreapi.com/products/categories');

  }
//step 3
  public GetProducts():Observable<any[]>{
    return this.http.get<any[]>('http://fakestoreapi.com/products');
  }

}
