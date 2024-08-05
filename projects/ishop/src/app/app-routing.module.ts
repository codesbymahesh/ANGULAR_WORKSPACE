import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CatalogComponent } from './catalog/catalog.component';
import { KidsComponent } from './kids/kids.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

//step 1 - all routes have to configured here..
const routes: Routes = [
  //user will (path)request home then we have to deliver homecomponent
  {path:"home", component:HomeComponent},
  {path:"shop", component:ShopComponent},
  {path:"catalog", component:CatalogComponent},
  {path:"kids", component:KidsComponent},
  {path:"men", component:MenComponent},
  {path:"women", component:WomenComponent},
  //defualt
  {path:"", component:HomeComponent},
  //page user requested is not found then,
  {path:"**", component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
