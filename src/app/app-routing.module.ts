import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { SellerComponent } from './seller/seller.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { CustomerComponent } from './customer/customer.component';


import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component'
import { CartComponent } from './seller/cart/cart.component';


const routes: Routes = [
  
  
  {path:'home',component:HomeComponent},
  {path:'admin',loadChildren:() =>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'seller',loadChildren:() =>import('./seller/seller.module').then(m=>m.SellerModule)},
  {path:'customer',component:CustomerComponent},
  {path:'login',component:LoginComponent},
  {path:'rf',component:ReactiveformComponent},
  {path:'db',component:DasboardComponent},
  {path:'cart',component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
