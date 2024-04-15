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
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { UserServiceService } from './services/user-service.service';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    CustomerComponent,
    SellerComponent,
    DasboardComponent,
  
    ReactiveformComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('constructor loaded')
  }
}
