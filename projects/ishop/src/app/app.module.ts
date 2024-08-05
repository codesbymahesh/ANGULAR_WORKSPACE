import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopindexComponent } from './shopindex/shopindex.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShopComponent } from './shop/shop.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopindexComponent,
    CatalogComponent,
    ShopComponent,
    KidsComponent,
    MenComponent,
    WomenComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ShopindexComponent]
})
export class AppModule { }
