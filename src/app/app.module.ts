import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import { CustomerComponent } from './customer/customer.component';
import { SellerComponent } from './seller/seller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DasboardComponent } from './dasboard/dasboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { UserServiceService } from './services/user-service.service';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './seller/cart/cart.component';
import { ProductListComponent } from './seller/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


 


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    CustomerComponent,
    SellerComponent,
    DasboardComponent,
    ReactiveformComponent,
    SidebarComponent,
    HomeComponent,
    CartComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    UserServiceService,
    AuthService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('app module loaded')
  }
 
}
