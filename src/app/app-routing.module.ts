import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { SellerComponent } from './seller/seller.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { CustomerComponent } from './customer/customer.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'seller',component:SellerComponent},
  {path:'',component:DasboardComponent},
  {path:'customer',component:CustomerComponent},
  {path:'login',component:LoginComponent},

  {path:'rf',component:ReactiveformComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
