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
import { ProductListComponent } from './seller/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'seller', component: SellerComponent, canActivate: [AuthGuard], data: { expectedRole: 'seller' } },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard], data: { expectedRole: 'customer' } },
  { path: 'rf', component: ReactiveformComponent },
  { path: 'db', component: DasboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductListComponent },
  { path: "foot", component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
