import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { NetflixindexComponent } from './NetflixWebsite/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './NetflixWebsite/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './NetflixWebsite/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './NetflixWebsite/netflixregister/netflixregister.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ForpropertiesComponent } from './components/forproperties/forproperties.component';
import { EventdemoComponent } from './components/eventdemo/eventdemo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicedemoComponent } from './components/servicedemo/servicedemo.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactivedemoComponent } from './components/reactivedemo/reactivedemo.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    DatabindingComponent,
    IfdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    ForpropertiesComponent,
    EventdemoComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    FilterComponent,
    RegisterComponent,
    ServicedemoComponent,
    TemplateformComponent,
    ReactivedemoComponent,
    PipedemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [ShoppingcartComponent]
})
export class AppModule { }
