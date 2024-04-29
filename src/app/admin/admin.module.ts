import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: '', component:AdminComponent,children:[
    {path:'sidebar',component:SidebarComponent}
  ]}

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdminModule {
 
 }
