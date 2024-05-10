import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  opened=false;
  // to chk in console it will appear as opened nd close
  log(state: any){
    console.log(state)
  }
  constructor(private router :Router){} 

  redirectToForm(){
    this.router.navigate(['/rf']);
  }
  

}
